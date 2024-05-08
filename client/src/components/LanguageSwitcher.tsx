import { FormControl, MenuItem, Select } from "@mui/material";
import { useLanguage } from "./LanguageContext";

const LanguageSwitcher = () => {
  const { language, switchLanguage } = useLanguage();

  return (
    <FormControl
      fullWidth
      sx={{
        minWidth: 120,
        ".MuiOutlinedInput-root": {
          borderRadius: "9999px",
        },
      }}
    >
      <Select
        value={language}
        label="Language"
        onChange={(e) => switchLanguage(e.target.value)}
        className="bg-white text-gray-800"
        autoWidth={false}
        MenuProps={{
          classes: { paper: "bg-white" },
        }}
      >
        <MenuItem value="English">English</MenuItem>
        <MenuItem value="Japanese">日本語</MenuItem>
        <MenuItem value="Chinese">中文</MenuItem>
        <MenuItem value="French">Français</MenuItem>
      </Select>
    </FormControl>
  );
};

export default LanguageSwitcher;
