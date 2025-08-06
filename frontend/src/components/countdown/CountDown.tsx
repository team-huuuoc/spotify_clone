import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const CountdownTimer = ({ targetDate }: { targetDate: Date }) => {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getTimeLeft(targetDate));
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div className="flex items-center gap-4">
            <span className="text-blue-600 font-medium">Kết thúc sau</span>
            <div className="flex gap-2">
                <TimeBox label="Giờ" value={timeLeft.hours} />
                <TimeBox label="Phút" value={timeLeft.minutes} />
                <TimeBox label="Giây" value={timeLeft.seconds} />
            </div>
        </div>
    );
};

const TimeBox = ({ label, value }: { label: string; value: number }) => (
    <Card className="bg-black text-white w-12 text-center rounded-md p-1">
        <CardContent className="p-0">
            <div className="text-lg font-bold border-b border-white">{String(value).padStart(2, "0")}</div>
            <div className="text-xs mt-1">{label}</div>
        </CardContent>
    </Card>
);

// Helper function
function getTimeLeft(targetDate: Date) {
    const total = targetDate.getTime() - new Date().getTime();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    return { hours, minutes, seconds };
}

export default CountdownTimer;
