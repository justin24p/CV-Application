import "../styles/personal.css";
export default function Personal() {
    return (
        <div className="personal">
            <h1>Personal Details</h1>
            <label htmlFor="fullName">FullName</label>
            <input type="text" name="fullname " id="fullname" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="phone">Phone number</label>
            <input type="tel" name="phone" id="phone" />
            <label htmlFor="address">Address</label>
            <input type="text" name="address" id="address" />
        </div>
    );
}
