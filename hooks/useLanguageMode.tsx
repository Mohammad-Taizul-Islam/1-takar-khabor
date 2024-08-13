"use client";
import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useLanguageSwitcher = () => {
    // Use "en" as the default language code for English
    const [language, setLanguage] = useLocalStorage("language", "en");

    useEffect(() => {
        // You may want to replace these class names with your actual styling logic
        const englishClass = "english";
        const banglaClass = "bangla";
        const bodyClass = window.document.body.classList;

        // Apply the appropriate class based on the selected language
        language === "en"
            ? bodyClass.add(englishClass)
            : bodyClass.add(banglaClass);
    }, [language]);

    return [language, setLanguage];
};

export default useLanguageSwitcher;
