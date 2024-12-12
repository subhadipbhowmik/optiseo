import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { CheckCheck } from "lucide-react";

const KeywordRankChecker = () => {
  const [url, setUrl] = useState("");
  const [keyword, setKeyword] = useState("");
  const [rankData, setRankData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch environment variables
  const apiUrl = "https://seo-api2.p.rapidapi.com/keyword-rank-checker";
  const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;
  const apiHost = import.meta.env.VITE_RAPIDAPI_HOST;

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!url || !keyword) {
      toast.error("Please enter both URL and keyword!");
      return;
    }

    setLoading(true);
    setRankData(null);

    const options = {
      method: "GET",
      url: apiUrl,
      params: {
        url: url,
        keyword: keyword,
        countryCode: "in",
      },
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": apiHost,
      },
    };

    try {
      const response = await axios.request(options);
      setRankData(response.data);
      toast.success("Keyword rank fetched successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch keyword rank. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <header className="flex items-center justify-center mb-12">
          <h1 className="text-4xl font-bold">Keyword Rank Checker</h1>
        </header>

        <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold">Check Keyword Rank</h2>
          <p className="text-gray-400 mb-4">
            Enter a URL and a keyword to check its rank.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                className="flex-grow bg-gray-700 border border-gray-600 text-white p-2 rounded-lg"
                placeholder="Enter URL (e.g., codingport.in)"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                className="flex-grow bg-gray-700 border border-gray-600 text-white p-2 rounded-lg"
                placeholder="Enter keyword (e.g., codingport)"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
              >
                {loading ? "Loading..." : "Check Rank"}
              </button>
            </div>
          </form>

          {rankData && (
            <div className="mt-8 space-y-6">
              <div className="bg-gray-800">
                <h3 className="text-xl font-semibold text-blue-400">
                  Rank Results for {rankData.keyword}
                </h3>
                <div className="mt-4">
                  <p className="text-gray-400">Domain: {rankData.domain}</p>
                  <p className="text-gray-400">Rank: {rankData.rank}</p>
                  <p className="text-gray-400">
                    Country Code: {rankData.countryCode}
                  </p>
                  <p className="text-gray-400">Language: {rankData.language}</p>
                </div>

                <ul className="mt-4 space-y-4">
                  {rankData.results.map((result, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center bg-gray-700 p-4 border border-gray-600 rounded-lg hover:bg-gray-600 transition duration-300"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-full">
                          {result.rank}
                        </div>
                        <span>{result.title}</span>
                      </div>
                      {result.domainFound && (
                        <CheckCheck className="w-8 h-8 text-indigo-600 bg-white p-1 rounded-full" />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {!rankData && !loading && (
            <p className="text-gray-400 mt-4">
              No data available yet. Please check the rank by entering a URL and
              a keyword.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default KeywordRankChecker;