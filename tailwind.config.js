module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#080808",
          "900_7f": "#0b0b0b7f",
          "900_01": "#010a02",
          "900_06": "#0a0a0a",
          "900_03": "#000000",
          "900_02": "#00000002",
          "900_05": "#070807",
          "900_04": "#0b0b0b",
          "900_0c": "#0404040c",
          "900_19": "#00000019",
          "900_66": "#00000066",
          "900_33_01": "#00000033",
          "900_6d": "#0000006d",
          "900_72": "#00000072",
          "900_3f": "#0000003f",
          "900_7f_01": "#0708077f",
          "900_0c_01": "#0000000c",
          "900_1c": "#0000001c",
          "900_33": "#06070a33",
        },
        gray: {
          50: "#fafafa",
          100: "#f2f2f2",
          300: "#e5e5e5",
          500: "#a3a3a3",
          600: "#828282",
          700: "#5f5f5f",
          800: "#3f3f3f",
          900: "#121212",
          "900_13": "#1f231f",
          "900_14": "#033009",
          "900_15": "#222222",
          "900_10": "#141414",
          "900_11": "#121312",
          "900_99": "#17171799",
          "900_12": "#1d1f1d",
          "800_01": "#454545",
          "900_19": "#1d1d1d19",
          "900_0c": "#1018280c",
          "900_11_01": "#11111111",
          "50_7f": "#fbfbfb7f",
          "900_bf": "#1f231fbf",
          "900_cc": "#262626cc",
          "700_0a": "#6060600a",
          "500_01": "#9f9f9f",
          "500_02": "#a5a5a5",
          "700_33": "#5f5f6233",
          "100_7f": "#f6f6f67f",
          "100_01": "#f5f5f5",
          "500_19": "#a6a6a619",
          "900_02": "#1c1c1c",
          "900_03": "#171717",
          "900_04": "#151515",
          "600_02": "#6b6b6b",
          "900_05": "#1b1b1b",
          "600_01": "#727272",
          "900_00": "#12121200",
          "900_01": "#1a1a1a",
          "800_33": "#42424233",
          "900_06": "#1c282c",
          "900_07": "#262626",
          "600_03": "#858585",
          "900_08": "#111111",
          "300_01": "#e6e6e6",
          "900_09": "#212121",
          "900_7f": "#1717177f",
        },
        deep_purple: {
          A400_28: "#4f29e728",
          A400_28_02: "#5a29e728",
          A400_28_01: "#4429e728",
        },
        blue_gray: {
          100: "#cdd4e6",
          200: "#becfcd",
          300: "#9ca3af",
          400: "#808f93",
          700: "#525252",
          800: "#293e48",
          900: "#1f2a2e",
          "800_72": "#293e4872",
          "900_02": "#2d2d2d",
          "900_01": "#333333",
          "100_01": "#d9d9d9",
          "100_02": "#cccccc",
          "100_03": "#d4d4d4",
          "900_66": "#2c2c2c66",
        },
        cyan: { A200_00: "#22f7dc00" },
        light_blue: {
          500: "#009dff",
          600: "#0ea5e9",
          A700_a2: "#009af1a2",
          A700: "#009af1",
          A700_4c: "#009af14c",
          A700_51: "#009af151",
          A700_66: "#009af166",
          A700_35: "#009af135",
          A700_19: "#009af119",
        },
        green: { 900: "#007103", A400_51: "#25ff6f51", "400_00": "#5df96000" },
        light_green: { A700_4f: "#2cef324f" },
        lime: { "500_28": "#e3e72928" },
        white: {
          A700_cc: "#ffffffcc",
          A700_38: "#ffffff38",
          A700_7f: "#ffffff7f",
          A700: "#ffffff",
          A700_00: "#ffffff00",
        },
        amber: { 600: "#ffb703", "600_00": "#ffb70300", "600_4c": "#ffb7034c" },
      },
      fontFamily: {
        inter: "Inter",
        roobertpro: "Roobert PRO",
        spacegrotesk: "Space Grotesk",
        plusjakartasans: "Plus Jakarta Sans",
        raleway: "Raleway",
        roboto: "Roboto",
      },
      boxShadow: {
        bs: "0px 1px  2px 0px #1018280c",
        bs4: "0px 1px  2px -1px #00000019",
        bs3: "0px 7px  24px 2px #0000001c",
        bs1: "0px 14px  24px 0px #00000002",
        bs2: "0px 230px  4px 0px #00000066",
      },
      backgroundImage: {
        gradient: "linear-gradient(132deg ,#121212,#12121200)",
        gradient1: "linear-gradient(180deg ,#171717,#17171799,#1717177f)",
        gradient2: "linear-gradient(180deg ,#009af14c,#ffb7034c)",
        gradient3: "linear-gradient(180deg ,#2cef324f,#ffb70300)",
      },
      textShadow: {
        ts: "0px 4px  4px #0000003f",
        ts1: "0px 2px  3px #00000072",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
