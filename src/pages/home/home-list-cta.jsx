import { Link } from "react-router-dom";
import Button from "../../components/Button";

const listCTA = [
    {
        name: "Order Now!",
        link: "/order",
        variant: "primary",
    },
    {
        name: "About Us!",
        link: "/about-us",
        variant: "secondary",
    },
    {
        name: "Feedback",
        link: "/feedback",
        variant: "secondary",
    },
];

export default function HomeListCTA() {
    return (
        <section className="h-[calc(100vh-156px)] flex flex-col justify-center">
            <div className="container mx-auto py-8">
                <div className="flex flex-col gap-4 justify-center max-w-48 mx-auto">
                    {listCTA.map((item, i) => (
                        <Link key={i} to={item?.link}>
                            <Button variant={item?.variant}>{item?.name}</Button>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}