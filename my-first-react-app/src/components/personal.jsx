import "../styles/personal.css";
export default function Personal({ personalData, handlePersonalChange }) {
    return (
        <div className="personal">
            <h1>Personal Details</h1>
            <label htmlFor="fullName">FullName</label>
            <input
                type="text"
                name="fullName"
                id="fullName"
                value={personalData.fullName}
                onChange={handlePersonalChange}
            />
            <label htmlFor="email">Email</label>
            <input
                type="email"
                name="email"
                id="email"
                value={personalData.email}
                onChange={handlePersonalChange}
            />
            <label htmlFor="phone">Phone number</label>
            <input
                type="tel"
                name="phone"
                id="phone"
                value={personalData.phone}
                onChange={handlePersonalChange}
            />
            <label htmlFor="address">Address</label>
            <input
                type="text"
                name="address"
                id="address"
                value={personalData.addres}
                onChange={handlePersonalChange}
            />
        </div>
    );
}
