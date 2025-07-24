import { useEffect, useState } from "react";

export default function Footer() {
    const [currentDate, setCurrentDate] = useState(() => new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, [])

    const closingTime = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate(),
        23, 0, 0
    );
    const openingTime = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate(),
        9, 0, 0
    );

    let nextOpeningTime = openingTime;
    if (currentDate >= closingTime) {
        nextOpeningTime = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate() + 1,
            9, 0, 0
        );
    }

    const isOpen = currentDate >= openingTime && currentDate < closingTime;

    if (isOpen) {
        return <footer>We are open until {closingTime.toLocaleTimeString()}, it is now {currentDate.toLocaleTimeString()}</footer>
    } else {
        return <footer>We are closed until {nextOpeningTime.toLocaleDateString()} at {nextOpeningTime.toLocaleTimeString()}, it is now {currentDate.toLocaleTimeString()}</footer>
    }
}
