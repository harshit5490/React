const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwritDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwritCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwritBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    tinymceApiKey: String(import.meta.env.VITE_TINYMCE_API_KEY),
}
export default conf;