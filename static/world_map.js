
var url = "/geoData/map";

var mapData = [ 
    {
      country: "Norway", 
      countrycountryCode: "NO", 
      latitude: 62.0, 
      longitude: 10.0,
      rank: 1,
      color: "#d8854f"
    }, 
    {
      country: "Denmark", 
      countrycountryCode: "DK", 
      latitude: 56.0, 
      longitude: 10.0,
      rank: 2,
      color: "#d8854f"
    }, 
    {
      country: "Iceland", 
      countrycountryCode: "IS", 
      latitude: 65.0, 
      longitude: -18.0,
      rank: 3,
      color: "#d8854f"
    }, 
    {
      country: "Switzerland", 
      countrycountryCode: "CH", 
      latitude: 47.0, 
      longitude: 8.0,
      rank: 4,
      color: "#d8854f"
    }, 
    {
      country: "Finland", 
      countrycountryCode: "FI", 
      latitude: 64.0, 
      longitude: 26.0,
      rank: 5,
      color: "#d8854f"
    }, 
    {
      country: "Netherlands", 
      countrycountryCode: "NL", 
      latitude: 52.5, 
      longitude: 5.75,
      rank: 6,
      color: "#d8854f"
    }, 
    {
      country: "Canada", 
      countrycountryCode: "CA", 
      latitude: 60.0, 
      longitude: -95.0,
      rank: 7,
      color: "#a7a737"
    }, 
    {
      country: "New Zealand", 
      countrycountryCode: "NZ", 
      latitude: -41.0, 
      longitude: 174.0,
      rank: 8,
      color: "#8aabb0"
    }, 
    {
      country: "Sweden", 
      countrycountryCode: "SE", 
      latitude: 62.0, 
      longitude: 15.0,
      rank: 9,
      color: "#d8854f"
    }, 
    {
      country: "Australia", 
      countrycountryCode: "AU", 
      latitude: -27.0, 
      longitude: 133.0,
      rank: 10,
      color: "#8aabb0"
    }, 
    {
      country: "Israel", 
      countrycountryCode: "IL", 
      latitude: 31.5, 
      longitude: 34.75,
      rank: 11,
      color: "#eea638"
    }, 
    {
      country: "Costa Rica", 
      countrycountryCode: "CR", 
      latitude: 10.0, 
      longitude: -84.0,
      rank: 12,
      color: "#a7a737"
    }, 
    {
      country: "Austria", 
      countrycountryCode: "AT", 
      latitude: 47.33, 
      longitude: 13.33,
      rank: 13,
      color: "#d8854f"
    }, 
    {
      country: "United States", 
      countrycountryCode: "US", 
      latitude: 38.0, 
      longitude: -97.0,
      rank: 14,
      color: "#a7a737"
    }, 
    {
      country: "Ireland", 
      countrycountryCode: "IE", 
      latitude: 53.0, 
      longitude: -8.0,
      rank: 15,
      color: "#d8854f"
    }, 
    {
      country: "Germany", 
      countrycountryCode: "DE", 
      latitude: 51.0, 
      longitude: 9.0,
      rank: 16,
      color: "#d8854f"
    }, 
    {
      country: "Belgium", 
      countrycountryCode: "BE", 
      latitude: 50.83, 
      longitude: 4.0,
      rank: 17,
      color: "#d8854f"
    }, 
    {
      country: "Luxembourg", 
      countrycountryCode: "LU", 
      latitude: 49.75, 
      longitude: 6.17,
      rank: 18,
      color: "#d8854f"
    }, 
    {
      country: "United Kingdom", 
      countrycountryCode: "GB", 
      latitude: 54.0, 
      longitude: -2.0,
      rank: 19,
      color: "#d8854f"
    }, 
    {
      country: "Chile", 
      countrycountryCode: "CL", 
      latitude: -30.0, 
      longitude: -71.0,
      rank: 20,
      color: "#86a965"
    }, 
    {
      country: "United Arab Emirates", 
      countrycountryCode: "AE", 
      latitude: 24.0, 
      longitude: 54.0,
      rank: 21,
      color: "#eea638"
    }, 
    {
      country: "Brazil", 
      countrycountryCode: "BR", 
      latitude: -10.0, 
      longitude: -55.0,
      rank: 22,
      color: "#86a965"
    }, 
    {
      country: "Czech Republic", 
      countrycountryCode: "CZ", 
      latitude: 49.75, 
      longitude: 15.5,
      rank: 23,
      color: "#d8854f"
    }, 
    {
      country: "Argentina", 
      countrycountryCode: "AR", 
      latitude: -34.0, 
      longitude: -64.0,
      rank: 24,
      color: "#86a965"
    }, 
    {
      country: "Mexico", 
      countrycountryCode: "MX", 
      latitude: 23.0, 
      longitude: -102.0,
      rank: 25,
      color: "#a7a737"
    }, 
    {
      country: "Singapore", 
      countrycountryCode: "SG", 
      latitude: 1.37, 
      longitude: 103.8,
      rank: 26,
      color: "#eea638"
    }, 
    {
      country: "Malta", 
      countrycountryCode: "MT", 
      latitude: 35.83, 
      longitude: 14.58,
      rank: 27,
      color: "#d8854f"
    }, 
    {
      country: "Uruguay", 
      countrycountryCode: "UY", 
      latitude: -33.0, 
      longitude: -56.0,
      rank: 28,
      color: "#86a965"
    }, 
    {
      country: "Guatemala", 
      countrycountryCode: "GT", 
      latitude: 15.5, 
      longitude: -90.25,
      rank: 29,
      color: "#a7a737"
    }, 
    {
      country: "Panama", 
      countrycountryCode: "PA", 
      latitude: 9.0, 
      longitude: -80.0,
      rank: 30,
      color: "#a7a737"
    }, 
    {
      country: "France", 
      countrycountryCode: "FR", 
      latitude: 46.0, 
      longitude: 2.0,
      rank: 31,
      color: "#d8854f"
    }, 
    {
      country: "Thailand", 
      countrycountryCode: "TH", 
      latitude: 15.0, 
      longitude: 100.0,
      rank: 32,
      color: "#eea638"
    }, 
    {
      country: "Taiwan Province of China", 
      countrycountryCode: "TW", 
      latitude: 23.70, 
      longitude: 120.96,
      rank: 33,
      color: "#eea638"
    }, 
    {
      country: "Spain", 
      countrycountryCode: "ES", 
      latitude: 40.0, 
      longitude: -4.0,
      rank: 34,
      color: "#d8854f"
    }, 
    {
      country: "Qatar", 
      countrycountryCode: "QA", 
      latitude: 25.5, 
      longitude: 51.25,
      rank: 35,
      color: "#eea638"
    }, 
    {
      country: "Colombia", 
      countrycountryCode: "CO", 
      latitude: 4.0, 
      longitude: -72.0,
      rank: 36,
      color: "#86a965"
    }, 
    {
      country: "Saudi Arabia", 
      countrycountryCode: "SA", 
      latitude: 25.0, 
      longitude: 45.0,
      rank: 37,
      color: "#eea638"
    }, 
    {
      country: "Trinidad and Tobago", 
      countrycountryCode: "TT", 
      latitude: 11.0, 
      longitude: -61.0,
      rank: 38,
      color: "#a7a737"
    }, 
    {
      country: "Kuwait", 
      countrycountryCode: "KW", 
      latitude: 29.34, 
      longitude: 47.66,
      rank: 39,
      color: "#eea638"
    }, 
    {
      country: "Slovakia", 
      countrycountryCode: "SK", 
      latitude: 48.67, 
      longitude: 19.5,
      rank: 40,
      color: "#d8854f"
    }, 
    {
      country: "Bahrain", 
      countrycountryCode: "BH", 
      latitude: 26.0, 
      longitude: 50.55,
      rank: 41,
      color: "#eea638"
    }, 
    {
      country: "Malaysia", 
      countrycountryCode: "MY", 
      latitude: 2.5, 
      longitude: 112.5,
      rank: 42,
      color: "#eea638"
    }, 
    {
      country: "Nicaragua", 
      countrycountryCode: "NI", 
      latitude: 13.0, 
      longitude: -85.0,
      rank: 43,
      color: "#a7a737"
    }, 
    {
      country: "Ecuador", 
      countrycountryCode: "EC", 
      latitude: -2.0, 
      longitude: -77.5,
      rank: 44,
      color: "#86a965"
    }, 
    {
      country: "El Salvador", 
      countrycountryCode: "SV", 
      latitude: 13.83, 
      longitude: -88.92,
      rank: 45,
      color: "#a7a737"
    }, 
    {
      country: "Poland", 
      countrycountryCode: "PL", 
      latitude: 52.0, 
      longitude: 20.0,
      rank: 46,
      color: "#d8854f"
    }, 
    {
      country: "Uzbekistan", 
      countrycountryCode: "UZ", 
      latitude: 41.0, 
      longitude: 64.0,
      rank: 47,
      color: "#eea638"
    }, 
    {
      country: "Italy", 
      countrycountryCode: "IT", 
      latitude: 42.83, 
      longitude: 12.83,
      rank: 48,
      color: "#d8854f"
    }, 
    {
      country: "Russia", 
      countrycountryCode: "RU", 
      latitude: 61.52, 
      longitude: 105.32,
      rank: 49,
      color: "#d8854f"
    }, 
    {
      country: "Belize", 
      countrycountryCode: "BZ", 
      latitude: 17.25, 
      longitude: -88.75,
      rank: 50,
      color: "#a7a737"
    }, 
    {
      country: "Japan", 
      countrycountryCode: "JP", 
      latitude: 36.0, 
      longitude: 138.0,
      rank: 51,
      color: "#eea638"
    }, 
    {
      country: "Lithuania", 
      countrycountryCode: "LT", 
      latitude: 56.0, 
      longitude: 24.0,
      rank: 52,
      color: "#d8854f"
    }, 
    {
      country: "Algeria", 
      countrycountryCode: "DZ", 
      latitude: 28.0, 
      longitude: 3.0,
      rank: 53,
      color: "#de4c4f"
    }, 
    {
      country: "Latvia", 
      countrycountryCode: "LV", 
      latitude: 57.0, 
      longitude: 25.0,
      rank: 54,
      color: "#d8854f"
    }, 
    {
      country: "South Korea", 
      countrycountryCode: "RK", 
      latitude: 35.91, 
      longitude: 127.77,
      rank: 55,
      color: "#eea638"
    }, 
    {
      country: "Moldova", 
      countrycountryCode: "MD", 
      latitude: 47.41, 
      longitude: 28.37,
      rank: 56,
      color: "#d8854f"
    }, 
    {
      country: "Romania", 
      countrycountryCode: "RO", 
      latitude: 46.0, 
      longitude: 25.0,
      rank: 57,
      color: "#d8854f"
    }, 
    {
      country: "Bolivia", 
      countrycountryCode: "BO", 
      latitude: -17.0, 
      longitude: -65.0,
      rank: 58,
      color: "#86a965"
    }, 
    {
      country: "Turkmenistan", 
      countrycountryCode: "TM", 
      latitude: 40.0, 
      longitude: 60.0,
      rank: 59,
      color: "#eea638"
    }, 
    {
      country: "Kazakhstan", 
      countrycountryCode: "KZ", 
      latitude: 48.0, 
      longitude: 68.0,
      rank: 60,
      color: "#eea638"
    }, 
    {
      country: "North Cyprus", 
      countrycountryCode: "CY", 
      latitude: 35.13, 
      longitude: 33.43,
      rank: 61,
      color: "#d8854f"
    }, 
    {
      country: "Slovenia", 
      countrycountryCode: "SI", 
      latitude: 46.0, 
      longitude: 15.0,
      rank: 62,
      color: "#d8854f"
    }, 
    {
      country: "Peru", 
      countrycountryCode: "PE", 
      latitude: -10.0, 
      longitude: -76.0,
      rank: 63,
      color: "#86a965"
    }, 
    {
      country: "Mauritius", 
      countrycountryCode: "MU", 
      latitude: -20.28, 
      longitude: 57.55,
      rank: 64,
      color: "#de4c4f"
    }, 
    {
      country: "Cyprus", 
      countrycountryCode: "CY", 
      latitude: 35.0, 
      longitude: 33.0,
      rank: 65,
      color: "#d8854f"
    }, 
    {
      country: "Estonia", 
      countrycountryCode: "EE", 
      latitude: 59.0, 
      longitude: 26.0,
      rank: 66,
      color: "#d8854f"
    }, 
    {
      country: "Belarus", 
      countrycountryCode: "BY", 
      latitude: 53.0, 
      longitude: 28.0,
      rank: 67,
      color:"#d8854f"
    }, 
    {
      country: "Libya", 
      countrycountryCode: "LB", 
      latitude: 26.34, 
      longitude: 17.23,
      rank: 68,
      color: "#de4c4f"
    }, 
    {
      country: "Turkey", 
      countrycountryCode: "TR", 
      latitude: 39.0, 
      longitude: 35.0,
      rank: 69,
      color: "#d8854f"
    }, 
    {
      country: "Paraguay", 
      countrycountryCode: "PY", 
      latitude: -23.0, 
      longitude: -58.0,
      rank: 70,
      color: "#86a965"
    }, 
    {
      country: "Hong Kong S.A.R., China", 
      countrycountryCode: "HK", 
      latitude: 22.40, 
      longitude: 114.11,
      rank: 71,
      color: "#eea638"
    }, 
    {
      country: "Philippines", 
      countrycountryCode: "PH", 
      latitude: 13.0, 
      longitude: 122.0,
      rank: 72,
      color: "#eea638"
    }, 
    {
      country: "Serbia", 
      countrycountryCode: "RS", 
      latitude: 44.0, 
      longitude: 21.0,
      rank: 73,
      color: "#d8854f"
    }, 
    {
      country: "Jordan", 
      countrycountryCode: "JO", 
      latitude: 31.0, 
      longitude: 36.0,
      rank: 74,
      color: "#eea638"
    }, 
    {
      country: "Hungary", 
      countrycountryCode: "HU", 
      latitude: 47.0, 
      longitude: 20.0,
      rank: 75,
      color: "#d8854f"
    }, 
    {
      country: "Jamaica", 
      countrycountryCode: "JM", 
      latitude: 18.25, 
      longitude: -77.5,
      rank: 76,
      color: "#a7a737"
    }, 
    {
      country: "Croatia", 
      countrycountryCode: "HR", 
      latitude: 45.17, 
      longitude: 15.5,
      rank: 77,
      color: "#d8854f"
    }, 
    {
      country: "Kosovo", 
      countrycountryCode: "KS", 
      latitude: 42.60, 
      longitude: 20.90,
      rank: 78,
      color: "#d8854f"
    }, 
    {
      country: "China", 
      countrycountryCode: "CN", 
      latitude: 35.0, 
      longitude: 105.0,
      rank: 79,
      color: "#eea638"
    }, 
    {
      country: "Pakistan", 
      countrycountryCode: "PK", 
      latitude: 30.0, 
      longitude: 70.0,
      rank: 80,
      color: "#eea638"
    }, 
    {
      country: "Indonesia", 
      countrycountryCode: "ID", 
      latitude: -5.0, 
      longitude: 120.0,
      rank: 81,
      color: "#eea638"
    }, 
    {
      country: "Venezuela", 
      countrycountryCode: "VE", 
      latitude: 8.0, 
      longitude: -66.0,
      rank: 82,
      color: "#86a965"
    }, 
    {
      country: "Montenegro", 
      countrycountryCode: "ME", 
      latitude: 42.0, 
      longitude: 19.0,
      rank: 83,
      color: "#d8854f"
    }, 
    {
      country: "Morocco", 
      countrycountryCode: "MA", 
      latitude: 32.0, 
      longitude: -5.0,
      rank: 84,
      color: "#de4c4f"
    }, 
    {
      country: "Azerbaijan", 
      countrycountryCode: "AZ", 
      latitude: 40.5, 
      longitude: 47.5,
      rank: 85,
      color: "#d8854f"
    }, 
    {
      country: "Dominican Republic", 
      countrycountryCode: "DO", 
      latitude: 19.0, 
      longitude: -70.67,
      rank: 86,
      color: "#a7a737"
    }, 
    {
      country: "Greece", 
      countrycountryCode: "GR", 
      latitude: 39.0, 
      longitude: 22.0,
      rank: 87,
      color: "#d8854f"
    }, 
    {
      country: "Lebanon", 
      countrycountryCode: "LB", 
      latitude: 33.83, 
      longitude: 35.83,
      rank: 88,
      color: "#eea638"
    }, 
    {
      country: "Portugal", 
      countrycountryCode: "PT", 
      latitude: 39.5, 
      longitude: -8.0,
      rank: 89,
      color: "#d8854f"
    }, 
    {
      country: "Bosnia and Herzegovina", 
      countrycountryCode: "BA", 
      latitude: 44.0, 
      longitude: 18.0,
      rank: 90,
      color: "#d8854f"
    }, 
    {
      country: "Honduras", 
      countrycountryCode: "HN", 
      latitude: 15.0, 
      longitude: -86.5,
      rank: 91,
      color: "#a7a737"
    }, 
    {
      country: "Macedonia", 
      countrycountryCode: "MK", 
      latitude: 41.83, 
      longitude: 22.0,
      rank: 92,
      color: "#d8854f"
    }, 
    {
      country: "Somalia", 
      countrycountryCode: "SO", 
      latitude: 10.0, 
      longitude: 49.0,
      rank: 93,
      color: "#de4c4f"
    }, 
    {
      country: "Vietnam", 
      countrycountryCode: "VN", 
      latitude: 16.0, 
      longitude: 106.0,
      rank: 94,
      color: "#eea638"
    }, 
    {
      country: "Nigeria", 
      countrycountryCode: "NG", 
      latitude: 10.0, 
      longitude: 8.0,
      rank: 95,
      color: "#de4c4f"
    }, 
    {
      country: "Tajikistan", 
      countrycountryCode: "TJ", 
      latitude: 39.0, 
      longitude: 71.0,
      rank: 96,
      color: "#eea638"
    }, 
    {
      country: "Bhutan", 
      countrycountryCode: "BT", 
      latitude: 27.5, 
      longitude: 90.5,
      rank: 97,
      color: "#eea638"
    }, 
    {
      country: "Kyrgyzstan", 
      countrycountryCode: "KG", 
      latitude: 41.0, 
      longitude: 75.0,
      rank: 98,
      color: "#eea638"
    }, 
    {
      country: "Nepal", 
      countrycountryCode: "NP", 
      latitude: 28.0, 
      longitude: 84.0,
      rank: 99,
      color: "#eea638"
    }, 
    {
      country: "Mongolia", 
      countrycountryCode: "MN", 
      latitude: 46.0, 
      longitude: 105.0,
      rank: 100,
      color: "#eea638"
    }, 
    {
      country: "South Africa", 
      countrycountryCode: "ZA", 
      latitude: -29.0, 
      longitude: 24.0,
      rank: 101,
      color: "#de4c4f"
    }, 
    {
      country: "Tunisia", 
      countrycountryCode: "TN", 
      latitude: 34.0, 
      longitude: 9.0,
      rank: 102,
      color: "#de4c4f"
    }, 
    {
      country: "Palestinian Territories", 
      countrycountryCode: "OPT", 
      latitude: 37.08, 
      longitude: -94.51,
      rank: 103,
      color: "#eea638"
    }, 
    {
      country: "Egypt", 
      countrycountryCode: "EG", 
      latitude: 27.0, 
      longitude: 30.0,
      rank: 104,
      color: "#de4c4f"
    }, 
    {
      country: "Bulgaria", 
      countrycountryCode: "BG", 
      latitude: 43.0, 
      longitude: 25.0,
      rank: 105,
      color: "#d8854f"
    }, 
    {
      country: "Sierra Leone", 
      countrycountryCode: "SL", 
      latitude: 8.5, 
      longitude: -11.5,
      rank: 106,
      color: "#de4c4f"
    }, 
    {
      country: "Cameroon", 
      countrycountryCode: "CM", 
      latitude: 6.0, 
      longitude: 12.0,
      rank: 107,
      color: "#de4c4f"
    }, 
    {
      country: "Iran", 
      countrycountryCode: "IR", 
      latitude: 32.48, 
      longitude: 53.69,
      rank: 108,
      color: "#eea638"
    }, 
    {
      country: "Albania", 
      countrycountryCode: "AL", 
      latitude: 41.0, 
      longitude: 20.0,
      rank: 109,
      color: "#d8854f"
    }, 
    {
      country: "Bangladesh", 
      countrycountryCode: "BD", 
      latitude: 24.0, 
      longitude: 90.0,
      rank: 110,
      color: "#eea638"
    }, 
    {
      country: "Namibia", 
      countrycountryCode: "NM", 
      latitude: -22.0, 
      longitude: 17.0,
      rank: 111,
      color: "#de4c4f"
    }, 
    {
      country: "Kenya", 
      countrycountryCode: "KE", 
      latitude: 1.0, 
      longitude: 38.0,
      rank: 112,
      color: "#de4c4f"
    }, 
    {
      country: "Mozambique", 
      countrycountryCode: "MZ", 
      latitude: -18.25, 
      longitude: 35.0,
      rank: 113,
      color: "#de4c4f"
    }, 
    {
      country: "Myanmar", 
      countrycountryCode: "MM", 
      latitude: 22.0, 
      longitude: 98.0,
      rank: 114,
      color: "#eea638"
    }, 
    {
      country: "Senegal", 
      countrycountryCode: "SN", 
      latitude: 14.0, 
      longitude: -14.0,
      rank: 115,
      color: "#de4c4f"
    }, 
    {
      country: "Zambia", 
      countrycountryCode: "ZM", 
      latitude: -15.0, 
      longitude: 30.0,
      rank: 116,
      color: "#de4c4f"
    }, 
    {
      country: "Iraq", 
      countrycountryCode: "IQ", 
      latitude: 33.0, 
      longitude: 44.0,
      rank: 117,
      color: "#eea638"
    }, 
    {
      country: "Gabon", 
      countrycountryCode: "GA", 
      latitude: -1.0, 
      longitude: 11.75,
      rank: 118,
      color: "#de4c4f"
    }, 
    {
      country: "Ethiopia", 
      countrycountryCode: "ET", 
      latitude: 8.0, 
      longitude: 38.0,
      rank: 119,
      color: "#de4c4f"
    }, 
    {
      country: "Sri Lanka", 
      countrycountryCode: "LK", 
      latitude: 7.0, 
      longitude: 81.0,
      rank: 120,
      color: "#eea638"
    }, 
    {
      country: "Armenia", 
      countrycountryCode: "AM", 
      latitude: 40.0, 
      longitude: 45.0,
      rank: 121,
      color: "#d8854f"
    }, 
    {
      country: "India", 
      countrycountryCode: "IN", 
      latitude: 20.0, 
      longitude: 77.0,
      rank: 122,
      color: "#eea638"
    }, 
    {
      country: "Mauritania", 
      countrycountryCode: "MR", 
      latitude: 20.0, 
      longitude: -12.0,
      rank: 123,
      color: "#de4c4f"
    }, 
    {
      country: "Congo (Brazzaville)", 
      countrycountryCode: "RC", 
      latitude: -4.26, 
      longitude: 15.24,
      rank: 124,
      color: "#de4c4f"
    }, 
    {
      country: "Georgia", 
      countrycountryCode: "GE", 
      latitude: 42.0, 
      longitude: 43.5,
      rank: 125,
      color: "#d8854f"
    }, 
    {
      country: "Congo (Kinshasa)", 
      countrycountryCode: "DC", 
      latitude: -4.04, 
      longitude: 21.76,
      rank: 126,
      color: "#de4c4f"
    }, 
    {
      country: "Mali", 
      countrycountryCode: "ML", 
      latitude: 17.0, 
      longitude: -4.0,
      rank: 127,
      color: "#de4c4f"
    }, 
    {
      country: "Ivory Coast", 
      countrycountryCode: "IC", 
      latitude: 7.54, 
      longitude: -5.55,
      rank: 128,
      color: "#de4c4f"
    }, 
    {
      country: "Cambodia", 
      countrycountryCode: "KH", 
      latitude: 13.0, 
      longitude: 105.0,
      rank: 129,
      color: "#eea638"
    }, 
    {
      country: "Sudan", 
      countrycountryCode: "SD", 
      latitude: 15.0, 
      longitude: 30.0,
      rank: 130,
      color: "#de4c4f"
    }, 
    {
      country: "Ghana", 
      countrycountryCode: "GH", 
      latitude: 8.0, 
      longitude: -2.0,
      rank: 131,
      color: "#de4c4f"
    }, 
    {
      country: "Ukraine", 
      countrycountryCode: "UA", 
      latitude: 49.0, 
      longitude: 32.0,
      rank: 132,
      color: "#d8854f"
    }, 
    {
      country: "Uganda", 
      countrycountryCode: "UG", 
      latitude: 1.0, 
      longitude: 32.0,
      rank: 133,
      color: "#de4c4f"
    }, 
    {
      country: "Burkina Faso", 
      countrycountryCode: "BF", 
      latitude: 13.0, 
      longitude: -2.0,
      rank: 134,
      color: "#de4c4f"
    }, 
    {
      country: "Niger", 
      countrycountryCode: "NE", 
      latitude: 16.0, 
      longitude: 8.0,
      rank: 135,
      color: "#de4c4f"
    }, 
    {
      country: "Malawi", 
      countrycountryCode: "MW", 
      latitude: -13.5, 
      longitude: 34.0,
      rank: 136,
      color: "#de4c4f"
    }, 
    {
      country: "Chad", 
      countrycountryCode: "TD", 
      latitude: 15.0, 
      longitude: 19.0,
      rank: 137,
      color: "#de4c4f"
    }, 
    {
      country: "Zimbabwe", 
      countrycountryCode: "ZW", 
      latitude: -20.0, 
      longitude: 30.0,
      rank: 138,
      color: "#de4c4f"
    }, 
    {
      country: "Lesotho", 
      countrycountryCode: "LS", 
      latitude: -29.5, 
      longitude: 28.5,
      rank: 139,
      color: "#de4c4f"
    }, 
    {
      country: "Angola", 
      countrycountryCode: "AO", 
      latitude: -12.5, 
      longitude: 18.5,
      rank: 140,
      color: "#de4c4f"
    }, 
    {
      country: "Afghanistan", 
      countrycountryCode: "AF", 
      latitude: 33.0, 
      longitude: 65.0,
      rank: 141,
      color: "#eea638"
    }, 
    {
      country: "Botswana", 
      countrycountryCode: "BW", 
      latitude: -22.0, 
      longitude: 24.0,
      rank: 142,
      color: "#de4c4f"
    }, 
    {
      country: "Benin", 
      countrycountryCode: "BJ", 
      latitude: 9.5, 
      longitude: 2.25,
      rank: 143,
      color: "#de4c4f"
    }, 
    {
      country: "Madagascar", 
      countrycountryCode: "MG", 
      latitude: -20.0, 
      longitude: 47.0,
      rank: 144,
      color: "#de4c4f"
    }, 
    {
      country: "Haiti", 
      countrycountryCode: "HT", 
      latitude: 19.0, 
      longitude: -72.42,
      rank: 145,
      color: "#a7a737"
    }, 
    {
      country: "Yemen", 
      countrycountryCode: "YE", 
      latitude: 15.0, 
      longitude: 48.0,
      rank: 146,
      color: "#eea638"
    }, 
    {
      country: "South Sudan", 
      countrycountryCode: "SS", 
      latitude: 6.88, 
      longitude: 31.31,
      rank: 147,
      color: "#de4c4f"
    }, 
    {
      country: "Liberia", 
      countrycountryCode: "LR", 
      latitude: 6.5, 
      longitude: -9.5,
      rank: 148,
      color: "#de4c4f"
    }, 
    {
      country: "Guinea", 
      countrycountryCode: "GN", 
      latitude: 11.0, 
      longitude: -10.0,
      rank: 149,
      color: "#de4c4f"
    }, 
    {
      country: "Togo", 
      countrycountryCode: "TG", 
      latitude: 8.0, 
      longitude: 1.17,
      rank: 150,
      color:"#de4c4f"
    }, 
    {
      country: "Rwanda", 
      countrycountryCode: "RW", 
      latitude: -2.0, 
      longitude: 30.0,
      rank: 151,
      color: "#de4c4f"
    }, 
    {
      country: "Syria", 
      countrycountryCode: "SY", 
      latitude: 34.80, 
      longitude: 38.99,
      rank: 152,
      color: "#eea638"
    }, 
    {
      country: "Tanzania", 
      countrycountryCode: "TA", 
      latitude: -6.37, 
      longitude: 34.88,
      rank: 153,
      color: "#de4c4f"
    }, 
    {
      country: "Burundi", 
      countrycountryCode: "BI", 
      latitude: -3.5, 
      longitude: 30.0,
      rank: 154,
      color: "#de4c4f"
    }, 
    {
      country: "Central African Republic", 
      countrycountryCode: "CF", 
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