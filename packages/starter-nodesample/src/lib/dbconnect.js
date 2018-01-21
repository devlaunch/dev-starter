const dbConfig = {
  server: 'localhost',
  isOnline: true,
};

async function dbconnect(params) {
  console.log(`Try connecting to database ${dbConfig.server}`);
  return await new Promise((resolve, reject) => {
    params ? resolve('DB Online') : reject('DB offline');
  });
}

export default dbconnect;
