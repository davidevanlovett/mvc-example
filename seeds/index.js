const db = require('../models');
const Jabber = require('jabber');
const jabber = new Jabber();

function generateUsers(num = 50){
	const users = [];
	for(let i = 0; i < num; i++){
		users.push({
			email: jabber.createEmail(),
			password: jabber.createWord(6)
		})
	}
	return users;
}

function generateThreads(num = 10){
	const threads = [];
	for(let i = 0; i < num; i++){
		threads.push({
			title: jabber.createWord(5, true)
		})
	}
	return threads;
}

function generatePosts(user, threads, num = 50){
	const posts = [];
	for(let i = 0; i < num; i++){
		posts.push({
			UserId: user.id, 
			body: jabber.createParagraph(30),
			ThreadId: threads[Math.floor(threads.length * Math.random())].id
		})
	}
	return posts;
}

async function seed(){
	const users = await db.User.bulkCreate(generateUsers());
	const threads = await db.Thread.bulkCreate(generateThreads());
	for(const user of users){
		await db.Post.bulkCreate(generatePosts(user, threads));
	}
}

seed();
