import { Client, Account, Avatars } from 'react-native-appwrite';

export const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('68122b1100269c53bf14')
    .setPlatform('dev.netninja.shelfie');

    // https://fra.cloud.appwrite.io/v1 (API End point)
    // 68122b1100269c53bf14 (Project ID)

export const account = new Account()
export const avatars = new Avatars()