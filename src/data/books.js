let books = [
    {
        "id": 1,
        "title": "مردی به نام اوه",
        "author": "گابریل گارسیا مارکز",
        "year": 1967,
        "genre": "رمان"
    },
    {
        "id": 2,
        "title": "تاریخ علم",
        "author": "جرج سالی",
        "year": 1954,
        "genre": "تاریخ علم"
    },
    {
        "id": 3,
        "title": "ماجراهای توم اسویر",
        "author": "مارک تواین",
        "year": 1876,
        "genre": "رمان"
    },
    {
        "id": 4,
        "title": "نامه به پیشوای معتمد",
        "author": "عبدالکریم سروش",
        "year": 1994,
        "genre": "نامه"
    },
    {
        "id": 5,
        "title": "زیر سقف",
        "author": "آلبر کامی",
        "year": 1942,
        "genre": "رمان"
    },
    {
        "id": 6,
        "title": "زمینه‌شناسی زندگی",
        "author": "ستاین بکر",
        "year": 1992,
        "genre": "زمینه‌شناسی"
    },
    {
        "id": 7,
        "title": "در جستجوی زمان از دست رفته",
        "author": "استیون هاوکینگ",
        "year": 1988,
        "genre": "فیزیک"
    },
    {
        "id": 8,
        "title": "شازده کوچولو",
        "author": "آنتوان دو سنت-اگزوپری",
        "year": 1943,
        "genre": "داستان کودکانه"
    },
    {
        "id": 9,
        "title": "ریاضیات ترسناک",
        "author": "آلن پالتشینگ",
        "year": 1999,
        "genre": "ریاضیات"
    },
    {
        "id": 10,
        "title": "جزیره ی زیبا",
        "author": "آلدوس هاکسلی",
        "year": 1962,
        "genre": "رمان"
    },
    {
        "id": 11,
        "title": "کد داوینچی",
        "author": "دن براون",
        "year": 2003,
        "genre": "رمان"
    },
    {
        "id": 12,
        "title": "سینوپسهای بی‌حد",
        "author": "کارل ساگان",
        "year": 1985,
        "genre": "فلسفه علم"
    },
    {
        "id": 13,
        "title": "در جستجوی زمان از دست رفته",
        "author": "استیون هاوکینگ",
        "year": 1988,
        "genre": "فیزیک"
    },
    {
        "id": 14,
        "title": "نسل ضایعه",
        "author": "سعدی زرین نیک",
        "year": 1982,
        "genre": "شعر"
    },
    {
        "id": 15,
        "title": "سفر به اهرام",
        "author": "زاها حدید",
        "year": 1977,
        "genre": "تاریخ"
    },
    {
        "id": 16,
        "title": "پویانمایی همگانی",
        "author": "ریچارد داوکینز",
        "year": 1976,
        "genre": "علمی"
    },
    {
        "id": 17,
        "title": "دیوان حافظ",
        "author": "خواجه شمس‌الدین محمد حافظ",
        "year": 14,
        "genre": "شعر"
    },
    {
        "id": 18,
        "title": "در جستجوی زمان از دست رفته",
        "author": "استیون هاوکینگ",
        "year": 1988,
        "genre": "فیزیک"
    },
    {
        "id": 19,
        "title": "منجمد در زمان",
        "author": "کورت وونه‌گات",
        "year": 1963,
        "genre": "علمی تخیلی"
    }
];

const getBooks = () => books;
export const getBookById=(id) => books.find(x => x.id === id);
export const deleteBook=(id)=>{
    books=books.filter(x=>x.id!==id)
}
export default getBooks

