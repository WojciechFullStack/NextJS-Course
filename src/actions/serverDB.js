'use server';

export async function writeToDB(message) {
  console.log(message);
  return "Logged to server";
}