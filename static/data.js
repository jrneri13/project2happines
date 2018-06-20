var continentData = [ 
    {
      country: "Norway", 
      continent: "EU", 
      rank: 1
    }, 
    {
      country: "Denmark", 
      continent: "EU", 
      rank: 2
    }, 
    {
      country: "Iceland", 
      continent: "EU",
      rank: 3
    }, 
    {
      country: "Switzerland", 
      continent: "EU",
      rank: 4
    }, 
    {
      country: "Finland", 
      continent: "EU",
      rank: 5
    }, 
    {
      country: "Netherlands", 
      continent: "EU",
      rank: 6
    }, 
    {
      country: "Canada", 
      continent: "NA",
      rank: 7
    }, 
    {
      country: "New Zealand", 
      continent: "OC", 
      rank: 8
    }, 
    {
      country: "Sweden", 
      continent: "EU",
      rank: 9
    }, 
    {
      country: "Australia", 
      continent: "OC", 
      rank: 10
    }, 
    {
      country: "Israel", 
      continent: "AS",
      rank: 11
    }, 
    {
      country: "Costa Rica", 
      continent: "SA",
      rank: 12
    }, 
    {
      country: "Austria", 
      continent: "EU", 
      rank: 13
    }, 
    {
      country: "United States", 
      continent: "NA",
      rank: 14
    }, 
    {
      country: "Ireland", 
      continent: "EU",
      rank: 15
    }, 
    {
      country: "Germany", 
      continent: "EU",
      rank: 16
    }, 
    {
      country: "Belgium", 
      continent: "EU", 
      rank: 17
    }, 
    {
      country: "Luxembourg", 
      continent: "EU", 
      rank: 18
    }, 
    {
      country: "United Kingdom", 
      continent: "EU",
      rank: 19
    }, 
    {
      country: "Chile", 
      continent: "SA", 
      rank: 20
    }, 
    {
      country: "United Arab Emirates", 
      continent: "AS",
      rank: 21
    }, 
    {
      country: "Brazil", 
      continent: "SA", 
      rank: 22
    }, 
    {
      country: "Czech Republic", 
      continent: "EU", 
      rank: 23
    }, 
    {
      country: "Argentina", 
      continent: "SA", 
      rank: 24
    }, 
    {
      country: "Mexico", 
      continent: "NA",
      rank: 25
    }, 
    {
      country: "Singapore", 
      continent: "AS",
      rank: 26
    }, 
    {
      country: "Malta", 
      continent: "EU", 
      rank: 27
    }, 
    {
      country: "Uruguay", 
      continent: "SA",
      rank: 28
    }, 
    {
      country: "Guatemala", 
      continent: "SA",
      rank: 29
    }, 
    {
      country: "Panama", 
      continent: "SA",
      rank: 30
    }, 
    {
      country: "France", 
      continent: "EU",
      rank: 31
    }, 
    {
      country: "Thailand", 
      continent: "AS",
      rank: 32
    }, 
    {
      country: "Taiwan Province of China", 
      continent: "AS", 
      rank: 33
    }, 
    {
      country: "Spain", 
      continent: "EU",
      rank: 34
    }, 
    {
      country: "Qatar", 
      continent: "AS",
      rank: 35
    }, 
    {
      country: "Colombia", 
      continent: "SA",
      rank: 36
    }, 
    {
      country: "Saudi Arabia", 
      continent: "AS",
      rank: 37
    }, 
    {
      country: "Trinidad and Tobago", 
      continent: "SA",
      rank: 38
    }, 
    {
      country: "Kuwait", 
      continent: "AS", 
      rank: 39
    }, 
    {
      country: "Slovakia", 
      continent: "EU", 
      rank: 40
    }, 
    {
      country: "Bahrain", 
      continent: "AS",
      rank: 41
    }, 
    {
      country: "Malaysia", 
      continent: "AS",
      rank: 42
    }, 
    {
      country: "Nicaragua", 
      continent: "SA",
      rank: 43
    }, 
    {
      country: "Ecuador", 
      continent: "SA",
      rank: 44
    }, 
    {
      country: "El Salvador", 
      continent: "SA", 
      rank: 45
    }, 
    {
      country: "Poland", 
      continent: "EU",
      rank: 46
    }, 
    {
      country: "Uzbekistan", 
      continent: "EU",
      rank: 47
    }, 
    {
      country: "Italy", 
      continent: "EU", 
      rank: 48
    }, 
    {
      country: "Russia", 
      continent: "EU", 
      rank: 49
    }, 
    {
      country: "Belize", 
      continent: "SA", 
      rank: 50
    }, 
    {
      country: "Japan", 
      continent: "AS",
      rank: 51
    }, 
    {
      country: "Lithuania", 
      continent: "EU",
      rank: 52
    }, 
    {
      country: "Algeria", 
      continent: "AF",
      rank: 53

    }, 
    {
      country: "Latvia", 
      continent: "EU",
      rank: 54
    }, 
    {
      country: "South Korea", 
      continent: "SA", 
      rank: 55
    }, 
    {
      country: "Moldova", 
      continent: "EU",
      rank: 56
    }, 
    {
      country: "Romania", 
      continent: "EU",
      rank: 57
    }, 
    {
      country: "Bolivia", 
      continent: "SA", 
      rank: 58
    }, 
    {
      country: "Turkmenistan", 
      continent: "EU",
      rank: 59
    }, 
    {
      country: "Kazakhstan", 
      continent: "EU",
      rank: 60
    }, 
    {
      country: "North Cyprus", 
      continent: "EU", 
      rank: 61
    }, 
    {
      country: "Slovenia", 
      continent: "EU",
      rank: 62
    }, 
    {
      country: "Peru", 
      continent: "SA", 
      rank: 63
    }, 
    {
      country: "Mauritius", 
      continent: "AF", 
      rank: 64
    }, 
    {
      country: "Cyprus", 
      continent: "EU",
      rank: 65
    }, 
    {
      country: "Estonia", 
      continent: "EU",
      rank: 66
    }, 
    {
      country: "Belarus", 
      continent: "EU",
      rank: 67
    }, 
    {
      country: "Libya", 
      continent: "AF", 
      rank: 68
    }, 
    {
      country: "Turkey", 
      continent: "AS",
      rank: 69
    }, 
    {
      country: "Paraguay", 
      continent: "SA", 
      rank: 70
    }, 
    {
      country: "Hong Kong S.A.R., China", 
      continent: "AS", 
      rank: 71
    }, 
    {
      country: "Philippines", 
      continent: "AS",
      rank: 72
    }, 
    {
      country: "Serbia", 
      continent: "EU",
      rank: 73
    }, 
    {
      country: "Jordan", 
      continent: "AS",
      rank: 74
    }, 
    {
      country: "Hungary", 
      continent: "EU",
      rank: 75
    }, 
    {
      country: "Jamaica", 
      continent: "SA", 
      rank: 76
    }, 
    {
      country: "Croatia", 
      continent: "EU", 
      rank: 77
    }, 
    {
      country: "Kosovo", 
      continent: "EU", 
      rank: 78
    }, 
    {
      country: "China", 
      continent: "AS",
      rank: 79
    }, 
    {
      country: "Pakistan", 
      continent: "AS",
      rank: 80
    }, 
    {
      country: "Indonesia", 
      continent: "AS",
      rank: 81
    }, 
    {
      country: "Venezuela", 
      continent: "SA",
      rank: 82
    }, 
    {
      country: "Montenegro", 
      continent: "EU",
      rank: 83
    }, 
    {
      country: "Morocco", 
      continent: "AF",
      rank: 84
    }, 
    {
      country: "Azerbaijan", 
      continent: "AS",
      rank: 85
    }, 
    {
      country: "Dominican Republic", 
      continent: "SA",
      rank: 86
    }, 
    {
      country: "Greece", 
      continent: "EU",
      rank: 87
    }, 
    {
      country: "Lebanon", 
      continent: "AS", 
      rank: 88
    }, 
    {
      country: "Portugal", 
      continent: "EU",
      rank: 89
    }, 
    {
      country: "Bosnia and Herzegovina", 
      continent: "EU",
      rank: 90
    }, 
    {
      country: "Honduras", 
      continent: "SA",
      rank: 91
    }, 
    {
      country: "Macedonia", 
      continent: "EU", 
      rank: 92
    }, 
    {
      country: "Somalia", 
      continent: "AF",
      rank: 93
    }, 
    {
      country: "Vietnam", 
      continent: "AS",
      rank: 94
    }, 
    {
      country: "Nigeria", 
      continent: "AF",
      rank: 95
    }, 
    {
      country: "Tajikistan", 
      continent: "AS",
      rank: 96
    }, 
    {
      country: "Bhutan", 
      continent: "AS",
      rank: 97
    }, 
    {
      country: "Kyrgyzstan", 
      continent: "AS",
      rank: 98
    }, 
    {
      country: "Nepal", 
      continent: "AS",
      rank: 99
    }, 
    {
      country: "Mongolia", 
      continent: "AS",
      rank: 100
    }, 
    {
      country: "South Africa", 
      continent: "AF", 
      rank: 101
    }, 
    {
      country: "Tunisia", 
      continent: "AF",
      rank: 102
    }, 
    {
      country: "Palestinian Territories", 
      continent: "AS", 
      rank: 103
    }, 
    {
      country: "Egypt", 
      continent: "AF",
      rank: 104
    }, 
    {
      country: "Bulgaria", 
      continent: "EU",
      rank: 105
    }, 
    {
      country: "Sierra Leone", 
      continent: "AF",
      rank: 106
    }, 
    {
      country: "Cameroon", 
      continent: "AF",
      rank: 107
    }, 
    {
      country: "Iran", 
      continent: "AS", 
      rank: 108
    }, 
    {
      country: "Albania", 
      continent: "EU",
      rank: 109
    }, 
    {
      country: "Bangladesh", 
      continent: "AS",
      rank: 110
    }, 
    {
      country: "Namibia", 
      continent: "AF", 
      rank: 111
    }, 
    {
      country: "Kenya", 
      continent: "AF",
      rank: 112
    }, 
    {
      country: "Mozambique", 
      continent: "AF", 
      rank: 113
    }, 
    {
      country: "Myanmar", 
      continent: "AS",
      rank: 114
    }, 
    {
      country: "Senegal", 
      continent: "AF",
      rank: 115
    }, 
    {
      country: "Zambia", 
      continent: "AF", 
      rank: 116
    }, 
    {
      country: "Iraq", 
      continent: "AS",
      rank: 117
    }, 
    {
      country: "Gabon", 
      continent: "AF",
      rank: 118
    }, 
    {
      country: "Ethiopia", 
      continent: "AF",
      rank: 119
    }, 
    {
      country: "Sri Lanka", 
      continent: "AS",
      rank: 120
    }, 
    {
      country: "Armenia", 
      continent: "AS",
      rank: 121
    }, 
    {
      country: "India", 
      continent: "AS",
      rank: 122
    }, 
    {
      country: "Mauritania", 
      continent: "AF",
      rank: 123
    }, 
    {
      country: "Congo (Brazzaville)", 
      continent: "AF", 
      rank: 124
    }, 
    {
      country: "Georgia", 
      continent: "AS",
      rank: 125
    }, 
    {
      country: "Congo (Kinshasa)", 
      continent: "AF", 
      rank: 126
    }, 
    {
      country: "Mali", 
      continent: "AF",
      rank: 127
    }, 
    {
      country: "Ivory Coast", 
      continent: "AF",
      rank: 128
    }, 
    {
      country: "Cambodia", 
      continent: "AS",
      rank: 129
    }, 
    {
      country: "Sudan", 
      continent: "AF",
      rank: 130
    }, 
    {
      country: "Ghana", 
      continent: "AF",
      rank: 131
    }, 
    {
      country: "Ukraine", 
      continent: "EU",
      rank: 132
    }, 
    {
      country: "Uganda", 
      continent: "AF",
      rank: 133
    }, 
    {
      country: "Burkina Faso", 
      continent: "AF",
      rank: 134
    }, 
    {
      country: "Niger", 
      continent: "AF",
      rank: 135
    }, 
    {
      country: "Malawi", 
      continent: "AF", 
      rank: 136
    }, 
    {
      country: "Chad", 
      continent: "AF",
      rank: 137
    }, 
    {
      country: "Zimbabwe", 
      continent: "AF", 
      rank: 138
    }, 
    {
      country: "Lesotho", 
      continent: "AF", 
      rank: 139
    }, 
    {
      country: "Angola", 
      continent: "AF", 
      rank: 140
    }, 
    {
      country: "Afghanistan", 
      continent: "AS",
      rank: 141
    }, 
    {
      country: "Botswana", 
      continent: "AF", 
      rank: 142
    }, 
    {
      country: "Benin", 
      continent: "AF",
      rank: 143
    }, 
    {
      country: "Madagascar", 
      continent: "AF", 
      rank: 144
    }, 
    {
      country: "Haiti", 
      continent: "SA",
      rank: 145
    }, 
    {
      country: "Yemen", 
      continent: "AS",
      rank: 146
    }, 
    {
      country: "South Sudan", 
      continent: "AF",
      rank: 147
    }, 
    {
      country: "Liberia", 
      continent: "AF",
      rank: 148
    }, 
    {
      country: "Guinea", 
      continent: "AF",
      rank: 149
    }, 
    {
      country: "Togo", 
      continent: "AF",
      rank: 150
    }, 
    {
      country: "Rwanda", 
      continent: "AF",
      rank: 151
    }, 
    {
      country: "Syria", 
      continent: "AS", 
      rank: 152
    }, 
    {
      country: "Tanzania", 
      continent: "AF", 
      rank: 153
    }, 
    {
      country: "Burundi", 
      continent: "AF",
      rank: 154
    }, 
    {
      country: "Central African Republic", 
      continent: "AF",
      rank: 155
    }
];