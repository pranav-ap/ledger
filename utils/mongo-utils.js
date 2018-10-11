const { MongoClient } = require('mongodb')


const connectToDB = async () => {
    try {
        let client = await MongoClient.connect(process.env.MONGODB_URI)

        if (!client) {
            throw new Error()
        } else {
            console.log('Connected to MongoDB');
            console.log('MONGODB_URI : ', process.env.MONGODB_URI)
            let db = client.db('ledgerDB');
            return db
        }
    } catch (e) {
        throw new Error('Unable to connect to MongoDB')
    }
}

module.exports = {
    connectToDB
}
