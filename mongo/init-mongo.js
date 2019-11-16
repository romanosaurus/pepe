db.createUser(
  {
    user: "romain",
    pwd: "romain",
    roles: [
      {
        role: "readWrite",
        db: "pepe"
      }
    ]
  }
);
