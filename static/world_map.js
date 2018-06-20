
var url = "/geoData/map";

var mapData = [ 
    {
      country: "Norway", 
      countryCode: "NO", 
      latitude: 62.0, 
      longitude: 10.0,
      rank: 1,
      color: "#d8854f"
    }, 
    {
      country: "Denmark", 
      countryCode: "DK", 
      latitude: 56.0, 
      longitude: 10.0,
      rank: 2,
      color: "#d8854f"
    }, 
    {
      country: "Iceland", 
      countryCode: "IS", 
      latitude: 65.0, 
      longitude: -18.0,
      rank: 3,
      color: "#d8854f"
    }, 
    {
      country: "Switzerland", 
      countryCode: "CH", 
      latitude: 47.0, 
      longitude: 8.0,
      rank: 4,
      color: "#d8854f"
    }, 
    {
      country: "Finland", 
      countryCode: "FI", 
      latitude: 64.0, 
      longitude: 26.0,
      rank: 5,
      color: "#d8854f"
    }, 
    {
      country: "Netherlands", 
      countryCode: "NL", 
      latitude: 52.5, 
      longitude: 5.75,
      rank: 6,
      color: "#d8854f"
    }, 
    {
      country: "Canada", 
      countryCode: "CA", 
      latitude: 60.0, 
      longitude: -95.0,
      rank: 7,
      color: "#a7a737"
    }, 
    {
      country: "New Zealand", 
      countryCode: "NZ", 
      latitude: -41.0, 
      longitude: 174.0,
      rank: 8,
      color: "#8aabb0"
    }, 
    {
      country: "Sweden", 
      countryCode: "SE", 
      latitude: 62.0, 
      longitude: 15.0,
      rank: 9,
      color: "#d8854f"
    }, 
    {
      country: "Australia", 
      countryCode: "AU", 
      latitude: -27.0, 
      longitude: 133.0,
      rank: 10,
      color: "#8aabb0"
    }, 
    {
      country: "Israel", 
      countryCode: "IL", 
      latitude: 31.5, 
      longitude: 34.75,
      rank: 11,
      color: "#eea638"
    }, 
    {
      country: "Costa Rica", 
      countryCode: "CR", 
      latitude: 10.0, 
      longitude: -84.0,
      rank: 12,
      color: "#a7a737"
    }, 
    {
      country: "Austria", 
      countryCode: "AT", 
      latitude: 47.33, 
      longitude: 13.33,
      rank: 13,
      color: "#d8854f"
    }, 
    {
      country: "United States", 
      countryCode: "US", 
      latitude: 38.0, 
      longitude: -97.0,
      rank: 14,
      color: "#a7a737"
    }, 
    {
      country: "Ireland", 
      countryCode: "IE", 
      latitude: 53.0, 
      longitude: -8.0,
      rank: 15,
      color: "#d8854f"
    }, 
    {
      country: "Germany", 
      countryCode: "DE", 
      latitude: 51.0, 
      longitude: 9.0,
      rank: 16,
      color: "#d8854f"
    }, 
    {
      country: "Belgium", 
      countryCode: "BE", 
      latitude: 50.83, 
      longitude: 4.0,
      rank: 17,
      color: "#d8854f"
    }, 
    {
      country: "Luxembourg", 
      countryCode: "LU", 
      latitude: 49.75, 
      longitude: 6.17,
      rank: 18,
      color: "#d8854f"
    }, 
    {
      country: "United Kingdom", 
      countryCode: "GB", 
      latitude: 54.0, 
      longitude: -2.0,
      rank: 19,
      color: "#d8854f"
    }, 
    {
      country: "Chile", 
      countryCode: "CL", 
      latitude: -30.0, 
      longitude: -71.0,
      rank: 20,
      color: "#86a965"
    }, 
    {
      country: "United Arab Emirates", 
      countryCode: "AE", 
      latitude: 24.0, 
      longitude: 54.0,
      rank: 21,
      color: "#eea638"
    }, 
    {
      country: "Brazil", 
      countryCode: "BR", 
      latitude: -10.0, 
      longitude: -55.0,
      rank: 22,
      color: "#86a965"
    }, 
    {
      country: "Czech Republic", 
      countryCode: "CZ", 
      latitude: 49.75, 
      longitude: 15.5,
      rank: 23,
      color: "#d8854f"
    }, 
    {
      country: "Argentina", 
      countryCode: "AR", 
      latitude: -34.0, 
      longitude: -64.0,
      rank: 24,
      color: "#86a965"
    }, 
    {
      country: "Mexico", 
      countryCode: "MX", 
      latitude: 23.0, 
      longitude: -102.0,
      rank: 25,
      color: "#a7a737"
    }, 
    {
      country: "Singapore", 
      countryCode: "SG", 
      latitude: 1.37, 
      longitude: 103.8,
      rank: 26,
      color: "#eea638"
    }, 
    {
      country: "Malta", 
      countryCode: "MT", 
      latitude: 35.83, 
      longitude: 14.58,
      rank: 27,
      color: "#d8854f"
    }, 
    {
      country: "Uruguay", 
      countryCode: "UY", 
      latitude: -33.0, 
      longitude: -56.0,
      rank: 28,
      color: "#86a965"
    }, 
    {
      country: "Guatemala", 
      countryCode: "GT", 
      latitude: 15.5, 
      longitude: -90.25,
      rank: 29,
      color: "#a7a737"
    }, 
    {
      country: "Panama", 
      countryCode: "PA", 
      latitude: 9.0, 
      longitude: -80.0,
      rank: 30,
      color: "#a7a737"
    }, 
    {
      country: "France", 
      countryCode: "FR", 
      latitude: 46.0, 
      longitude: 2.0,
      rank: 31,
      color: "#d8854f"
    }, 
    {
      country: "Thailand", 
      countryCode: "TH", 
      latitude: 15.0, 
      longitude: 100.0,
      rank: 32,
      color: "#eea638"
    }, 
    {
      country: "Taiwan Province of China", 
      countryCode: "TW", 
      latitude: 23.70, 
      longitude: 120.96,
      rank: 33,
      color: "#eea638"
    }, 
    {
      country: "Spain", 
      countryCode: "ES", 
      latitude: 40.0, 
      longitude: -4.0,
      rank: 34,
      color: "#d8854f"
    }, 
    {
      country: "Qatar", 
      countryCode: "QA", 
      latitude: 25.5, 
      longitude: 51.25,
      rank: 35,
      color: "#eea638"
    }, 
    {
      country: "Colombia", 
      countryCode: "CO", 
      latitude: 4.0, 
      longitude: -72.0,
      rank: 36,
      color: "#86a965"
    }, 
    {
      country: "Saudi Arabia", 
      countryCode: "SA", 
      latitude: 25.0, 
      longitude: 45.0,
      rank: 37,
      color: "#eea638"
    }, 
    {
      country: "Trinidad and Tobago", 
      countryCode: "TT", 
      latitude: 11.0, 
      longitude: -61.0,
      rank: 38,
      color: "#a7a737"
    }, 
    {
      country: "Kuwait", 
      countryCode: "KW", 
      latitude: 29.34, 
      longitude: 47.66,
      rank: 39,
      color: "#eea638"
    }, 
    {
      country: "Slovakia", 
      countryCode: "SK", 
      latitude: 48.67, 
      longitude: 19.5,
      rank: 40,
      color: "#d8854f"
    }, 
    {
      country: "Bahrain", 
      countryCode: "BH", 
      latitude: 26.0, 
      longitude: 50.55,
      rank: 41,
      color: "#eea638"
    }, 
    {
      country: "Malaysia", 
      countryCode: "MY", 
      latitude: 2.5, 
      longitude: 112.5,
      rank: 42,
      color: "#eea638"
    }, 
    {
      country: "Nicaragua", 
      countryCode: "NI", 
      latitude: 13.0, 
      longitude: -85.0,
      rank: 43,
      color: "#a7a737"
    }, 
    {
      country: "Ecuador", 
      countryCode: "EC", 
      latitude: -2.0, 
      longitude: -77.5,
      rank: 44,
      color: "#86a965"
    }, 
    {
      country: "El Salvador", 
      countryCode: "SV", 
      latitude: 13.83, 
      longitude: -88.92,
      rank: 45,
      color: "#a7a737"
    }, 
    {
      country: "Poland", 
      countryCode: "PL", 
      latitude: 52.0, 
      longitude: 20.0,
      rank: 46,
      color: "#d8854f"
    }, 
    {
      country: "Uzbekistan", 
      countryCode: "UZ", 
      latitude: 41.0, 
      longitude: 64.0,
      rank: 47,
      color: "#eea638"
    }, 
    {
      country: "Italy", 
      countryCode: "IT", 
      latitude: 42.83, 
      longitude: 12.83,
      rank: 48,
      color: "#d8854f"
    }, 
    {
      country: "Russia", 
      countryCode: "RU", 
      latitude: 61.52, 
      longitude: 105.32,
      rank: 49,
      color: "#d8854f"
    }, 
    {
      country: "Belize", 
      countryCode: "BZ", 
      latitude: 17.25, 
      longitude: -88.75,
      rank: 50,
      color: "#a7a737"
    }, 
    {
      country: "Japan", 
      countryCode: "JP", 
      latitude: 36.0, 
      longitude: 138.0,
      rank: 51,
      color: "#eea638"
    }, 
    {
      country: "Lithuania", 
      countryCode: "LT", 
      latitude: 56.0, 
      longitude: 24.0,
      rank: 52,
      color: "#d8854f"
    }, 
    {
      country: "Algeria", 
      countryCode: "DZ", 
      latitude: 28.0, 
      longitude: 3.0,
      rank: 53,
      color: "#de4c4f"
    }, 
    {
      country: "Latvia", 
      countryCode: "LV", 
      latitude: 57.0, 
      longitude: 25.0,
      rank: 54,
      color: "#d8854f"
    }, 
    {
      country: "South Korea", 
      countryCode: "RK", 
      latitude: 35.91, 
      longitude: 127.77,
      rank: 55,
      color: "#eea638"
    }, 
    {
      country: "Moldova", 
      countryCode: "MD", 
      latitude: 47.41, 
      longitude: 28.37,
      rank: 56,
      color: "#d8854f"
    }, 
    {
      country: "Romania", 
      countryCode: "RO", 
      latitude: 46.0, 
      longitude: 25.0,
      rank: 57,
      color: "#d8854f"
    }, 
    {
      country: "Bolivia", 
      countryCode: "BO", 
      latitude: -17.0, 
      longitude: -65.0,
      rank: 58,
      color: "#86a965"
    }, 
    {
      country: "Turkmenistan", 
      countryCode: "TM", 
      latitude: 40.0, 
      longitude: 60.0,
      rank: 59,
      color: "#eea638"
    }, 
    {
      country: "Kazakhstan", 
      countryCode: "KZ", 
      latitude: 48.0, 
      longitude: 68.0,
      rank: 60,
      color: "#eea638"
    }, 
    {
      country: "North Cyprus", 
      countryCode: "CY", 
      latitude: 35.13, 
      longitude: 33.43,
      rank: 61,
      color: "#d8854f"
    }, 
    {
      country: "Slovenia", 
      countryCode: "SI", 
      latitude: 46.0, 
      longitude: 15.0,
      rank: 62,
      color: "#d8854f"
    }, 
    {
      country: "Peru", 
      countryCode: "PE", 
      latitude: -10.0, 
      longitude: -76.0,
      rank: 63,
      color: "#86a965"
    }, 
    {
      country: "Mauritius", 
      countryCode: "MU", 
      latitude: -20.28, 
      longitude: 57.55,
      rank: 64,
      color: "#de4c4f"
    }, 
    {
      country: "Cyprus", 
      countryCode: "CY", 
      latitude: 35.0, 
      longitude: 33.0,
      rank: 65,
      color: "#d8854f"
    }, 
    {
      country: "Estonia", 
      countryCode: "EE", 
      latitude: 59.0, 
      longitude: 26.0,
      rank: 66,
      color: "#d8854f"
    }, 
    {
      country: "Belarus", 
      countryCode: "BY", 
      latitude: 53.0, 
      longitude: 28.0,
      rank: 67,
      color:"#d8854f"
    }, 
    {
      country: "Libya", 
      countryCode: "LB", 
      latitude: 26.34, 
      longitude: 17.23,
      rank: 68,
      color: "#de4c4f"
    }, 
    {
      country: "Turkey", 
      countryCode: "TR", 
      latitude: 39.0, 
      longitude: 35.0,
      rank: 69,
      color: "#d8854f"
    }, 
    {
      country: "Paraguay", 
      countryCode: "PY", 
      latitude: -23.0, 
      longitude: -58.0,
      rank: 70,
      color: "#86a965"
    }, 
    {
      country: "Hong Kong S.A.R., China", 
      countryCode: "HK", 
      latitude: 22.40, 
      longitude: 114.11,
      rank: 71,
      color: "#eea638"
    }, 
    {
      country: "Philippines", 
      countryCode: "PH", 
      latitude: 13.0, 
      longitude: 122.0,
      rank: 72,
      color: "#eea638"
    }, 
    {
      country: "Serbia", 
      countryCode: "RS", 
      latitude: 44.0, 
      longitude: 21.0,
      rank: 73,
      color: "#d8854f"
    }, 
    {
      country: "Jordan", 
      countryCode: "JO", 
      latitude: 31.0, 
      longitude: 36.0,
      rank: 74,
      color: "#eea638"
    }, 
    {
      country: "Hungary", 
      countryCode: "HU", 
      latitude: 47.0, 
      longitude: 20.0,
      rank: 75,
      color: "#d8854f"
    }, 
    {
      country: "Jamaica", 
      countryCode: "JM", 
      latitude: 18.25, 
      longitude: -77.5,
      rank: 76,
      color: "#a7a737"
    }, 
    {
      country: "Croatia", 
      countryCode: "HR", 
      latitude: 45.17, 
      longitude: 15.5,
      rank: 77,
      color: "#d8854f"
    }, 
    {
      country: "Kosovo", 
      countryCode: "KS", 
      latitude: 42.60, 
      longitude: 20.90,
      rank: 78,
      color: "#d8854f"
    }, 
    {
      country: "China", 
      countryCode: "CN", 
      latitude: 35.0, 
      longitude: 105.0,
      rank: 79,
      color: "#eea638"
    }, 
    {
      country: "Pakistan", 
      countryCode: "PK", 
      latitude: 30.0, 
      longitude: 70.0,
      rank: 80,
      color: "#eea638"
    }, 
    {
      country: "Indonesia", 
      countryCode: "ID", 
      latitude: -5.0, 
      longitude: 120.0,
      rank: 81,
      color: "#eea638"
    }, 
    {
      country: "Venezuela", 
      countryCode: "VE", 
      latitude: 8.0, 
      longitude: -66.0,
      rank: 82,
      color: "#86a965"
    }, 
    {
      country: "Montenegro", 
      countryCode: "ME", 
      latitude: 42.0, 
      longitude: 19.0,
      rank: 83,
      color: "#d8854f"
    }, 
    {
      country: "Morocco", 
      countryCode: "MA", 
      latitude: 32.0, 
      longitude: -5.0,
      rank: 84,
      color: "#de4c4f"
    }, 
    {
      country: "Azerbaijan", 
      countryCode: "AZ", 
      latitude: 40.5, 
      longitude: 47.5,
      rank: 85,
      color: "#d8854f"
    }, 
    {
      country: "Dominican Republic", 
      countryCode: "DO", 
      latitude: 19.0, 
      longitude: -70.67,
      rank: 86,
      color: "#a7a737"
    }, 
    {
      country: "Greece", 
      countryCode: "GR", 
      latitude: 39.0, 
      longitude: 22.0,
      rank: 87,
      color: "#d8854f"
    }, 
    {
      country: "Lebanon", 
      countryCode: "LB", 
      latitude: 33.83, 
      longitude: 35.83,
      rank: 88,
      color: "#eea638"
    }, 
    {
      country: "Portugal", 
      countryCode: "PT", 
      latitude: 39.5, 
      longitude: -8.0,
      rank: 89,
      color: "#d8854f"
    }, 
    {
      country: "Bosnia and Herzegovina", 
      countryCode: "BA", 
      latitude: 44.0, 
      longitude: 18.0,
      rank: 90,
      color: "#d8854f"
    }, 
    {
      country: "Honduras", 
      countryCode: "HN", 
      latitude: 15.0, 
      longitude: -86.5,
      rank: 91,
      color: "#a7a737"
    }, 
    {
      country: "Macedonia", 
      countryCode: "MK", 
      latitude: 41.83, 
      longitude: 22.0,
      rank: 92,
      color: "#d8854f"
    }, 
    {
      country: "Somalia", 
      countryCode: "SO", 
      latitude: 10.0, 
      longitude: 49.0,
      rank: 93,
      color: "#de4c4f"
    }, 
    {
      country: "Vietnam", 
      countryCode: "VN", 
      latitude: 16.0, 
      longitude: 106.0,
      rank: 94,
      color: "#eea638"
    }, 
    {
      country: "Nigeria", 
      countryCode: "NG", 
      latitude: 10.0, 
      longitude: 8.0,
      rank: 95,
      color: "#de4c4f"
    }, 
    {
      country: "Tajikistan", 
      countryCode: "TJ", 
      latitude: 39.0, 
      longitude: 71.0,
      rank: 96,
      color: "#eea638"
    }, 
    {
      country: "Bhutan", 
      countryCode: "BT", 
      latitude: 27.5, 
      longitude: 90.5,
      rank: 97,
      color: "#eea638"
    }, 
    {
      country: "Kyrgyzstan", 
      countryCode: "KG", 
      latitude: 41.0, 
      longitude: 75.0,
      rank: 98,
      color: "#eea638"
    }, 
    {
      country: "Nepal", 
      countryCode: "NP", 
      latitude: 28.0, 
      longitude: 84.0,
      rank: 99,
      color: "#eea638"
    }, 
    {
      country: "Mongolia", 
      countryCode: "MN", 
      latitude: 46.0, 
      longitude: 105.0,
      rank: 100,
      color: "#eea638"
    }, 
    {
      country: "South Africa", 
      countryCode: "ZA", 
      latitude: -29.0, 
      longitude: 24.0,
      rank: 101,
      color: "#de4c4f"
    }, 
    {
      country: "Tunisia", 
      countryCode: "TN", 
      latitude: 34.0, 
      longitude: 9.0,
      rank: 102,
      color: "#de4c4f"
    }, 
    {
      country: "Palestinian Territories", 
      countryCode: "OPT", 
      latitude: 37.08, 
      longitude: -94.51,
      rank: 103,
      color: "#eea638"
    }, 
    {
      country: "Egypt", 
      countryCode: "EG", 
      latitude: 27.0, 
      longitude: 30.0,
      rank: 104,
      color: "#de4c4f"
    }, 
    {
      country: "Bulgaria", 
      countryCode: "BG", 
      latitude: 43.0, 
      longitude: 25.0,
      rank: 105,
      color: "#d8854f"
    }, 
    {
      country: "Sierra Leone", 
      countryCode: "SL", 
      latitude: 8.5, 
      longitude: -11.5,
      rank: 106,
      color: "#de4c4f"
    }, 
    {
      country: "Cameroon", 
      countryCode: "CM", 
      latitude: 6.0, 
      longitude: 12.0,
      rank: 107,
      color: "#de4c4f"
    }, 
    {
      country: "Iran", 
      countryCode: "IR", 
      latitude: 32.48, 
      longitude: 53.69,
      rank: 108,
      color: "#eea638"
    }, 
    {
      country: "Albania", 
      countryCode: "AL", 
      latitude: 41.0, 
      longitude: 20.0,
      rank: 109,
      color: "#d8854f"
    }, 
    {
      country: "Bangladesh", 
      countryCode: "BD", 
      latitude: 24.0, 
      longitude: 90.0,
      rank: 110,
      color: "#eea638"
    }, 
    {
      country: "Namibia", 
      countryCode: "NM", 
      latitude: -22.0, 
      longitude: 17.0,
      rank: 111,
      color: "#de4c4f"
    }, 
    {
      country: "Kenya", 
      countryCode: "KE", 
      latitude: 1.0, 
      longitude: 38.0,
      rank: 112,
      color: "#de4c4f"
    }, 
    {
      country: "Mozambique", 
      countryCode: "MZ", 
      latitude: -18.25, 
      longitude: 35.0,
      rank: 113,
      color: "#de4c4f"
    }, 
    {
      country: "Myanmar", 
      countryCode: "MM", 
      latitude: 22.0, 
      longitude: 98.0,
      rank: 114,
      color: "#eea638"
    }, 
    {
      country: "Senegal", 
      countryCode: "SN", 
      latitude: 14.0, 
      longitude: -14.0,
      rank: 115,
      color: "#de4c4f"
    }, 
    {
      country: "Zambia", 
      countryCode: "ZM", 
      latitude: -15.0, 
      longitude: 30.0,
      rank: 116,
      color: "#de4c4f"
    }, 
    {
      country: "Iraq", 
      countryCode: "IQ", 
      latitude: 33.0, 
      longitude: 44.0,
      rank: 117,
      color: "#eea638"
    }, 
    {
      country: "Gabon", 
      countryCode: "GA", 
      latitude: -1.0, 
      longitude: 11.75,
      rank: 118,
      color: "#de4c4f"
    }, 
    {
      country: "Ethiopia", 
      countryCode: "ET", 
      latitude: 8.0, 
      longitude: 38.0,
      rank: 119,
      color: "#de4c4f"
    }, 
    {
      country: "Sri Lanka", 
      countryCode: "LK", 
      latitude: 7.0, 
      longitude: 81.0,
      rank: 120,
      color: "#eea638"
    }, 
    {
      country: "Armenia", 
      countryCode: "AM", 
      latitude: 40.0, 
      longitude: 45.0,
      rank: 121,
      color: "#d8854f"
    }, 
    {
      country: "India", 
      countryCode: "IN", 
      latitude: 20.0, 
      longitude: 77.0,
      rank: 122,
      color: "#eea638"
    }, 
    {
      country: "Mauritania", 
      countryCode: "MR", 
      latitude: 20.0, 
      longitude: -12.0,
      rank: 123,
      color: "#de4c4f"
    }, 
    {
      country: "Congo (Brazzaville)", 
      countryCode: "RC", 
      latitude: -4.26, 
      longitude: 15.24,
      rank: 124,
      color: "#de4c4f"
    }, 
    {
      country: "Georgia", 
      countryCode: "GE", 
      latitude: 42.0, 
      longitude: 43.5,
      rank: 125,
      color: "#d8854f"
    }, 
    {
      country: "Congo (Kinshasa)", 
      countryCode: "DC", 
      latitude: -4.04, 
      longitude: 21.76,
      rank: 126,
      color: "#de4c4f"
    }, 
    {
      country: "Mali", 
      countryCode: "ML", 
      latitude: 17.0, 
      longitude: -4.0,
      rank: 127,
      color: "#de4c4f"
    }, 
    {
      country: "Ivory Coast", 
      countryCode: "IC", 
      latitude: 7.54, 
      longitude: -5.55,
      rank: 128,
      color: "#de4c4f"
    }, 
    {
      country: "Cambodia", 
      countryCode: "KH", 
      latitude: 13.0, 
      longitude: 105.0,
      rank: 129,
      color: "#eea638"
    }, 
    {
      country: "Sudan", 
      countryCode: "SD", 
      latitude: 15.0, 
      longitude: 30.0,
      rank: 130,
      color: "#de4c4f"
    }, 
    {
      country: "Ghana", 
      countryCode: "GH", 
      latitude: 8.0, 
      longitude: -2.0,
      rank: 131,
      color: "#de4c4f"
    }, 
    {
      country: "Ukraine", 
      countryCode: "UA", 
      latitude: 49.0, 
      longitude: 32.0,
      rank: 132,
      color: "#d8854f"
    }, 
    {
      country: "Uganda", 
      countryCode: "UG", 
      latitude: 1.0, 
      longitude: 32.0,
      rank: 133,
      color: "#de4c4f"
    }, 
    {
      country: "Burkina Faso", 
      countryCode: "BF", 
      latitude: 13.0, 
      longitude: -2.0,
      rank: 134,
      color: "#de4c4f"
    }, 
    {
      country: "Niger", 
      countryCode: "NE", 
      latitude: 16.0, 
      longitude: 8.0,
      rank: 135,
      color: "#de4c4f"
    }, 
    {
      country: "Malawi", 
      countryCode: "MW", 
      latitude: -13.5, 
      longitude: 34.0,
      rank: 136,
      color: "#de4c4f"
    }, 
    {
      country: "Chad", 
      countryCode: "TD", 
      latitude: 15.0, 
      longitude: 19.0,
      rank: 137,
      color: "#de4c4f"
    }, 
    {
      country: "Zimbabwe", 
      countryCode: "ZW", 
      latitude: -20.0, 
      longitude: 30.0,
      rank: 138,
      color: "#de4c4f"
    }, 
    {
      country: "Lesotho", 
      countryCode: "LS", 
      latitude: -29.5, 
      longitude: 28.5,
      rank: 139,
      color: "#de4c4f"
    }, 
    {
      country: "Angola", 
      countryCode: "AO", 
      latitude: -12.5, 
      longitude: 18.5,
      rank: 140,
      color: "#de4c4f"
    }, 
    {
      country: "Afghanistan", 
      countryCode: "AF", 
      latitude: 33.0, 
      longitude: 65.0,
      rank: 141,
      color: "#eea638"
    }, 
    {
      country: "Botswana", 
      countryCode: "BW", 
      latitude: -22.0, 
      longitude: 24.0,
      rank: 142,
      color: "#de4c4f"
    }, 
    {
      country: "Benin", 
      countryCode: "BJ", 
      latitude: 9.5, 
      longitude: 2.25,
      rank: 143,
      color: "#de4c4f"
    }, 
    {
      country: "Madagascar", 
      countryCode: "MG", 
      latitude: -20.0, 
      longitude: 47.0,
      rank: 144,
      color: "#de4c4f"
    }, 
    {
      country: "Haiti", 
      countryCode: "HT", 
      latitude: 19.0, 
      longitude: -72.42,
      rank: 145,
      color: "#a7a737"
    }, 
    {
      country: "Yemen", 
      countryCode: "YE", 
      latitude: 15.0, 
      longitude: 48.0,
      rank: 146,
      color: "#eea638"
    }, 
    {
      country: "South Sudan", 
      countryCode: "SS", 
      latitude: 6.88, 
      longitude: 31.31,
      rank: 147,
      color: "#de4c4f"
    }, 
    {
      country: "Liberia", 
      countryCode: "LR", 
      latitude: 6.5, 
      longitude: -9.5,
      rank: 148,
      color: "#de4c4f"
    }, 
    {
      country: "Guinea", 
      countryCode: "GN", 
      latitude: 11.0, 
      longitude: -10.0,
      rank: 149,
      color: "#de4c4f"
    }, 
    {
      country: "Togo", 
      countryCode: "TG", 
      latitude: 8.0, 
      longitude: 1.17,
      rank: 150,
      color:"#de4c4f"
    }, 
    {
      country: "Rwanda", 
      countryCode: "RW", 
      latitude: -2.0, 
      longitude: 30.0,
      rank: 151,
      color: "#de4c4f"
    }, 
    {
      country: "Syria", 
      countryCode: "SY", 
      latitude: 34.80, 
      longitude: 38.99,
      rank: 152,
      color: "#eea638"
    }, 
    {
      country: "Tanzania", 
      countryCode: "TA", 
      latitude: -6.37, 
      longitude: 34.88,
      rank: 153,
      color: "#de4c4f"
    }, 
    {
      country: "Burundi", 
      countryCode: "BI", 
      latitude: -3.5, 
      longitude: 30.0,
      rank: 154,
      color: "#de4c4f"
    }, 
    {
      country: "Central African Republic", 
      countryCode: "CF", 
      latitude: 7.0, 
      longitude: 21.0,
      rank: 155,
      color: "#de4c4f"
    }
];

// get min and max values
var minBulletSize = 3;
var maxBulletSize = 70;
var min = Infinity;
var max = -Infinity;
for (var i = 0; i < mapData.length; i++) {
  var value = mapData[i].rank;
  if (value < min ) {
    min = value;
  }
  if (value > max ) {
    max = value;
  }
}

// it's better to use circle square to show difference between values, not a radius
var maxSquare = maxBulletSize * maxBulletSize * 2 * Math.PI;
var minSquare = minBulletSize * minBulletSize * 2 * Math.PI;

// create circle for each country
var images = [];
for (var i = 0; i < mapData.length; i++) {
  var dataItem = mapData[i];
  var value = dataItem.rank;
  // calculate size of a bubble
  var square = (value - min) / (max - min) * (maxSquare - minSquare) + minSquare;
  if (square < minSquare) {
    square = minSquare;
  }
  var size = Math.sqrt(square / (Math.PI * 2));
  var id = dataItem.countryCode;

  images.push( {
    "type": "circle",
    "theme": "light",

    "width": size,
    "height": size,
    "color": dataItem.color,
    "longitude": mapData[id].longitude,
    "latitude": mapData[id].latitude,
    "title": dataItem.country,
    "rank": rank
  } );
}

// build map
var map = AmCharts.makeChart( "chartdiv", {
  "type": "map",
  "projection": "eckert6",
  "titles": [ {
    "text": "World Happiness in 2017",
    "size": 14
  }, {
    "text": "source: Kaggle",
    "size": 11
  } ],
  "areasSettings": {
    //"unlistedAreasColor": "#000000",
    //"unlistedAreasAlpha": 0.1
  },
  "dataProvider": {
    "map": "worldLow",
    "images": images
  },
  "export": {
    "enabled": true
  }
} );