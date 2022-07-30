import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const newMeetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        }

        props.onAddMeetup(newMeetupData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input
                        type="text"
                        id="title"
                        ref={titleInputRef}
                        placeholder="Add Meetup Title"
                        required
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input
                        type="url"
                        id="imgae"
                        ref={imageInputRef}
                        placeholder="Add Meetup Image with URL"
                        required
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Meetup Address</label>
                    <input
                        type="text"
                        id="address"
                        ref={addressInputRef}
                        placeholder="Add Meetup Address"
                        required
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Meetup Description</label>
                    <textarea
                        rows="5"
                        id="description"
                        ref={descriptionInputRef}
                        placeholder="Add Meetup Description"
                        required
                    ></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;