import { useState } from "react";

function UserProfile() {
  const [userProfile, setUserProfile] = useState({
    name: "Paulina",
    email: "paulina@email.com",
    address: {
      street: "123 Main St",
      city: "Seattle",
      country: "USA",
    },
  });

  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const updateAddress = () => {
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      address: {
        ...prevProfile.address,
        street: street || prevProfile.address.street,
        city: city || prevProfile.address.city,
        country: country || prevProfile.address.country,
      },
    }));

    // clear inputs
    setStreet("");
    setCity("");
    setCountry("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Profile</h2>

      <input
        type="text"
        placeholder="Street"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
      />
      <br />

      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <br />

      <input
        type="text"
        placeholder="Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <br />

      <button onClick={updateAddress}>Update Address</button>

      <h3>Current Profile:</h3>
      <p>
        <strong>Name:</strong> {userProfile.name}
      </p>
      <p>
        <strong>Email:</strong> {userProfile.email}
      </p>
      <p>
        <strong>Street:</strong> {userProfile.address.street}
      </p>
      <p>
        <strong>City:</strong> {userProfile.address.city}
      </p>
      <p>
        <strong>Country:</strong> {userProfile.address.country}
      </p>
    </div>
  );
}

export default UserProfile;
