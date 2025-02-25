"use client";

import { useParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

const LanguageSwitcher = () => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const lang = params.lang;
  const [isPending, startTransition] = useTransition();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    console.log(`Selected language: ${selectedLanguage}`);
    // Add your language switch logic here
    startTransition(() => {
      // Add your language switch logic here
      const newPathname = pathname.replace(
        /^\/[a-z]{2}/,
        `/${selectedLanguage}`
      );
      replace(newPathname);
    });
  };

  return (
    <select
      value={lang}
      onChange={handleChange}
      disabled={isPending}
      className="border border-black p-2"
    >
      <option value="en">English</option>
      <option value="vi">Vietnamese</option>
    </select>
  );
};

export default LanguageSwitcher;
