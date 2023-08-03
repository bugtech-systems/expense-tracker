import { icons } from "./constants"

// Mock data object used for LineChart, BarChart and List
const cash = [
    {
        id: 1,
        title: 'WEALTHFRONT',
        subtitle: 'Personal Savings',
        amount: 92875,
        image: "https://clipground.com/images/wealthfront-logo-clipart-3.png"
    },
    {
        id: 2,
        title: 'BANK OF AMERICA',
        subtitle: 'BofA Checkings',
        amount: 12030,
        image: "https://download.cnet.com/a/img/resize/42147f24606bad5b9de7c53c5272d93cbb1e6619/catalog/2018/05/14/1abc4639-6512-4ad5-85bb-4a4af741f6ed/imgingest-3268458817296498169.png?auto=webp&fit=crop&height=675&width=1200"
    },
    {
        id: 3,
        title: 'ROBINHOOD',
        subtitle: 'Robinhood Cash',
        amount: 7123,
        image: "https://codeload.com/files/Pages/logo/robinhood.png"
    },
    {
        id: 4,
        title: 'COINBASE PRO',
        subtitle: 'Coinbase USD',
        amount: 15712,
        image: "https://cdn.icon-icons.com/icons2/2407/PNG/512/coinbase_icon_146203.png"
    },
    {
        id: 5,
        title: 'CHASE BANK',
        subtitle: 'Saphire Reserved',
        amount: 2114,
        image: "https://creditcards.chase.com/K-Slate/images/logos/chasebank-logo-icon.png"
    }
]

const chart = {
    datasets: [
        {
            data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
            ]
        }
    ]
}
const expenses = [
    {
        id: 1,
        name: "Rent",
        icon: icons.sports_icon,
        image: "https://www.clubcareinsurance.com/wp-content/uploads/2019/03/home.png",
        color: "#FF8E9B",
        amount: 25
    },
    {
        id: 2,
        name: "Restaurants",
        icon: icons.sports_icon,
        image: "https://cdn.onlinewebfonts.com/svg/img_236767.png",
        color: "#219FF6",
        amount: 19
    },
    {
        id: 3,
        name: "Drinks",
        icon: icons.sports_icon,
        image: "https://cdn3.iconfinder.com/data/icons/drink-v2/100/1-15-512.png",
        color: "#9ED764",
        amount: 30
    },
    {
        id: 4,
        name: "Uber",
        icon: icons.sports_icon,
        image: "https://cdn.icon-icons.com/icons2/2407/PNG/512/uber_icon_146079.png",
        color: "#FFD38C",
        amount: 10
    },
    {
        id: 5,
        name: "Groceries",
        icon: icons.sports_icon,
        image: "https://cdn3.iconfinder.com/data/icons/e-commerce-2-2/380/4-1024.png",
        color: "#FF8711",
        amount: 18
    },

]


const piechart = [
    {
        id: 1,
        name: "Rent",
        icon: icons.sports_icon,
        image: "https://www.clubcareinsurance.com/wp-content/uploads/2019/03/home.png",
        color: "#FF8E9B",
        amount: 25
    },
    {
        id: 2,
        name: "Restaurants",
        icon: icons.sports_icon,
        image: "https://cdn.onlinewebfonts.com/svg/img_236767.png",
        color: "#219FF6",
        amount: 19
    },
    {
        id: 3,
        name: "Drinks",
        icon: icons.sports_icon,
        image: "https://cdn3.iconfinder.com/data/icons/drink-v2/100/1-15-512.png",
        color: "#9ED764",
        amount: 30
    },
    {
        id: 4,
        name: "Uber",
        icon: icons.sports_icon,
        image: "https://cdn.icon-icons.com/icons2/2407/PNG/512/uber_icon_146079.png",
        color: "#FFD38C",
        amount: 10
    },
    {
        id: 5,
        name: "Groceries",
        icon: icons.sports_icon,
        image: "https://cdn3.iconfinder.com/data/icons/e-commerce-2-2/380/4-1024.png",
        color: "#FF8711",
        amount: 18
    },

]
// https://www.pinclipart.com/picdir/big/559-5595900_current-electricity-clipart-black-and-white-electricity-icon.png

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
        data: [
            50,
            20,
            2,
            86,
            71,
            100
        ],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})` // optional
    }, {
        data: [
            20,
            10,
            4,
            56,
            87,
            90
        ]
    }, {
        data: [
            30,
            90,
            67,
            54,
            10,
            2
        ]
    }]
}


// // Mock data object used for Contribution Graph

const contributionData = [
    { date: '2016-01-02', count: 1 },
    { date: '2016-01-03', count: 2 },
    { date: '2016-01-04', count: 3 },
    { date: '2016-01-05', count: 4 },
    { date: '2016-01-06', count: 5 },
    { date: '2016-01-30', count: 2 },
    { date: '2016-01-31', count: 3 },
    { date: '2016-03-01', count: 2 },
    { date: '2016-04-02', count: 4 },
    { date: '2016-03-05', count: 2 },
    { date: '2016-02-30', count: 4 }
]

// // Mock data object for Pie Chart

const pieChartData = [
    { name: 'Seoul', population: 21500000, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Toronto', population: 2800000, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Beijing', population: 527612, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'New York', population: 8538000, color: '#ffffff', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Moscow', population: 11920000, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 15 }
]

// Mock data object for Progress

const progressChartData = [0.4, 0.6, 0.8]

export { data, contributionData, pieChartData, progressChartData, cash, chart, expenses, piechart }