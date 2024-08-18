exports.isAdmin = async () => {
  try {
    const response = await fetch(
      "https://travel-booking-backend-express-js-mongo-db-vercel.vercel.app/apis/v1/isAdmin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Include cookies (credentials) in the request
      }
    );

    if (response.status !== 200) {
      // Check if the response status is not 200

      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    // Parse the response body as JSON
    return data;
  } catch (error) {
    console.error("Error fetching admin status:", error.message || error);
    throw new Error("Failed to fetch data");
  }
};

exports.clientLogin = async (userName, password) => {
  const payloaddata = {
    userName,
    password,
  };
  const res = await fetch(
    "https://travel-booking-backend-express-js-mongo-db-vercel.vercel.app/apis/v1/client-login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payloaddata),
      credentials: "include",
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

exports.instructorLogin = async (userName, password) => {
  const payloaddata = {
    userName,
    password,
  };
  const res = await fetch(
    "https://travel-booking-backend-express-js-mongo-db-vercel.vercel.app/apis/v1/instructor-login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payloaddata),
      credentials: "include",
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

exports.logout = async () => {
  const res = await fetch(
    "https://travel-booking-backend-express-js-mongo-db-vercel.vercel.app/apis/v1/logout",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
