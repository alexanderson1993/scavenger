var imageStore = new FS.Store.GridFS("images", {
  chunkSize: 1024*1024  // optional, default GridFS chunk size in bytes (can be overridden per file).
                        // Default: 2MB. Reasonable range: 512KB - 4MB
});
Images = new FS.Collection("images", {
  stores: [imageStore]
});

Teams = new Mongo.Collection('teams');
Items = new Mongo.Collection('items');
Submissions = new Mongo.Collection('submission');

Schemas = {};

Schemas.Teams = new SimpleSchema({
	name: {
		type: String
	}
})

Schemas.Items = new SimpleSchema({
	name: {
		type: String
	},
	points: {
		type: Number
	}
})

Teams.attachSchema(Schemas.Teams);
Items.attachSchema(Schemas.Items);