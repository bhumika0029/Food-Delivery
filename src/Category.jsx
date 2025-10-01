import { LuBrickWall } from "react-icons/lu";
import { MdFreeBreakfast } from "react-icons/md";
import { MdSoupKitchen } from "react-icons/md";
import { FaBowlRice } from "react-icons/fa6";
import { BiDish } from "react-icons/bi";
import { GiFullPizza } from "react-icons/gi";
import { PiHamburgerFill } from "react-icons/pi";

export const category = [

    {
        id:1,
        name:"All",
        image:<LuBrickWall />
    },
    {
        id:2,
        name:"breakfast",
        image:<MdFreeBreakfast />
    },
    {
        id:3,
        name:"soups",
        image:<MdSoupKitchen />
    },
    {
        id:4,
        name:"pasta",
        image:<FaBowlRice />
    },
    {
        id:5,
        name:"main_Course",
        image:<BiDish />
    },
    {
        id:6,
        name:"pizza",
        image:<GiFullPizza />
    },
    {
        id:7,
        name:"burger",
        image:<PiHamburgerFill />
    }
]