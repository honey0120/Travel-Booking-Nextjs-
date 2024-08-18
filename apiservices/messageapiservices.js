exports.selectData = async (query, projection) => {
  const payloaddata = {
    query: query,
    projection: projection,
  };
  const res = await fetch(
    "https://travel-booking-backend-express-js-mongo-db-vercel.vercel.app/apis/v1/select-messages",
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

exports.selectAllData = async (query, projection) => {
  const payloaddata = {
    query: query,
    projection: projection,
  };
  const res = await fetch(
    "https://travel-booking-backend-express-js-mongo-db-vercel.vercel.app/apis/v1/select-messages-public",
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

exports.deleteData = async (id) => {
  const res = await fetch(
    `https://travel-booking-backend-express-js-mongo-db-vercel.vercel.app/apis/v1/delete-message/${id}`,
    {
      method: "DELETE",
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

exports.createData = async (
  text,
  attachment,
  sender,
  senderRole,
  receiver,
  receiverRole,
  conversationID,
  sendedpackageID,
  acceptedPackage,
  rejectedPackage,
  quantityPackage,
  addedPrice
) => {
  const aboutdata = {
    text,
    attachment,
    sender,
    senderRole,
    receiver,
    receiverRole,
    conversationID,
    sendedpackageID,
    acceptedPackage,
    rejectedPackage,
    quantityPackage,
    addedPrice,
  };

  const res = await fetch(
    `https://travel-booking-backend-express-js-mongo-db-vercel.vercel.app/apis/v1/create-message`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(aboutdata),
      credentials: "include",
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

exports.updateData = async (aboutdata) => {
  const res = await fetch(
    `https://travel-booking-backend-express-js-mongo-db-vercel.vercel.app/apis/v1/update-message`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(aboutdata),
      credentials: "include",
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
