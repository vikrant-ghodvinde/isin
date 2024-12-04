"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabase/configsupabase";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/components/dialog";
import { SearchIcon } from "lucide-react";
import { Input } from "@/ui/components/input";
import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ISINSearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [companySuggestions, setCompanySuggestions] = useState([]);
  const router = useRouter();

  const handleInputChange = (e) => {
    const input = e.target.value.trim();
    setSearchTerm(input);

    if (input && isValidCompanyName(input)) {
      fetchCompanySuggestions(input);
    } else {
      setCompanySuggestions([]);
    }
  };

  const isValidISIN = (term) => {
    const regex = /^IN[a-zA-Z0-9]{10}$/;
    return regex.test(term);
  };

  const isValidCompanyName = (term) => {
    // return /^[A-Z\s]+$/.test(term);
    // const regex = /^[A-Za-z0-9\s&',.-]+$/;
    const regex = /^[A-Za-z0-9\s&',.\-()]*$/;

    return regex.test(term);
  };

  const fetchCompanySuggestions = async (input) => {
    try {
      const { data, error } = await supabase
        .from("ISIN_numbers")
        .select("*")
        .ilike("Company Name", `${input}%`);

      if (error) {
        console.error("Error fetching company suggestions:", error.message);
        return;
      }

      const uniqueCompanyNames = new Set(
        data?.map((item) => item["Company Name"])
      );

      setCompanySuggestions([...uniqueCompanyNames]);
    } catch (error) {
      console.error("Error fetching company suggestions:", error);
    }
  };
  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      toast.error("Please enter a valid ISIN or Company Name.");
      return;
    }

    if (isValidISIN(searchTerm)) {
      console.log("Valid ISIN:", searchTerm);
    } else if (isValidCompanyName(searchTerm)) {
      console.log("Valid Company Name:", searchTerm);
    } else {
      toast.error(
        "Invalid input. ISIN should start with 'IN' and have exactly 12 characters. Company Name should contain only uppercase letters."
      );
      return;
    }

    let searchCount = parseInt(localStorage.getItem("searchCount") || "0");
    if (searchCount >= 10) {
      router.push("/limit-extended");
      return;
    }

    searchCount++;
    localStorage.setItem("searchCount", searchCount.toString());

    try {
      console.log("Searching for:", searchTerm);

      const { data: data1, error: error1 } = await supabase
        .from("ISIN_numbers")
        .select("*")
        .or(`ISIN.eq.${searchTerm},Company Name.eq.${searchTerm}`);

      if (error1) {
        console.error("Error fetching ISIN_numbers:", error1.message);
        toast.error("Error fetching data. Please try again.");
        return;
      }

      const { data: data2, error: error2 } = await supabase
        .from("ISIN_numbers_2")
        .select("*")
        .or(`ISIN.eq.${searchTerm},Company Name.eq.${searchTerm}`);

      if (error2) {
        console.error("Error fetching ISIN_numbers_2:", error2.message);
        toast.error("Error fetching data. Please try again.");
        return;
      }

      const combinedData = [...(data1 || []), ...(data2 || [])];

      if (!combinedData.length) {
        toast.error("No matching ISIN or Company Name found in the database.");
        return;
      }

      console.log("Fetched data:", combinedData);

      router.push(
        `/search?query=${encodeURIComponent(searchTerm)}&results=${
          combinedData.length
        }`
      );
    } catch (error) {
      console.error("Error during search:", error);
      alert("An error occurred while searching. Please try again.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild className="cursor-pointer">
        <button type="button" title="Search ISIN">
          <SearchIcon size={20} />
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Search ISIN</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 gap-y-4">
          <div className="relative">
            <div className="relative group">
              <Input
                type="text"
                placeholder="Enter ISIN"
                value={searchTerm}
                onChange={handleInputChange}
              />
              {companySuggestions.length > 0 &&
                isValidCompanyName(searchTerm) && (
                  <ul className="relative w-full h-auto max-h-52 p-1 mt-1 rounded-md border shadow-sm shadow-black/5 overflow-y-auto">
                    {companySuggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          setSearchTerm(suggestion);
                          setCompanySuggestions([]); 
                        }}
                        className="text-sm py-2 px-3 hover:bg-black/[0.025] rounded-md cursor-pointer select-none"
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
            </div>
          </div>
          <div className="relative text-center">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ISINSearchBox;
