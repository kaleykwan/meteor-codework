import { Meteor } from 'meteor/meteor';
import { PostsCollection } from './PostsCollection';

Meteor.publish('allPosts', function publishAllPosts() {
    return PostsCollection.find();
});