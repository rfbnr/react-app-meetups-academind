import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setloadedMeetups] = useState([]);

    useEffect(() => {
        fetch(
            "https://react-getting-started-7fbb1-default-rtdb.firebaseio.com/meetups.json"
        )
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                const meetups = [];

                for (const key in data) {
                    const meetup = {
                        id: key,
                        ...data[key]
                    };
                    meetups.push(meetup);
                }

                setIsLoading(false);
                setloadedMeetups(meetups);
            });
    }, []);


    return (
        <section>
            <h1>All Meetups</h1>
            {isLoading ? (
                <p><i>loading ...</i></p>
            ) : (
                <MeetupList meetups={loadedMeetups}/>
            )}
        </section>
    );
}

export default AllMeetupsPage;
