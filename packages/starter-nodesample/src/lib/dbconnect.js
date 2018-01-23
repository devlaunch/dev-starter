const dbConfig = {
  server: 'localhost',
  isOnline: true,
};

function dbconnect(params) {
  console.log(`Try connecting to database ${dbConfig.server}`);
  return new Promise((resolve, reject) => {
    if (params) {
      resolve('DB Online');
    } else {
      reject(new Error('DB offline'));
    }
  });
}

export default dbconnect;
