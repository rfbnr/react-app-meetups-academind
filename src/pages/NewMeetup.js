import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetup() {
    const navigate = useNavigate();

    function addMeetupHandler(newMeetupData) {
        fetch(
            "https://react-getting-started-7fbb1-default-rtdb.firebaseio.com/meetups.json",
            {
                method: "POST",
                body: JSON.stringify(newMeetupData),
                headers: {
                    "Content-Type": "application/json",
                }
            }
        ).then(() => {
            navigate("/");
        });
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    )
}

export default NewMeetup;
