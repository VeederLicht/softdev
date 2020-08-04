// Field updates basis
db.gaHeer.find().forEach(function(doc){

})


// uitbereiding 1, check exists
db.gaHeer.find({Nummer: {$exists: true}}).forEach(function(doc) {

});

db.gaHeer.find({Nummer: {$exists: true}}).forEach(function(doc) {
    doc.Nummer = "" + doc.Nummer;
    db.db-name.save(obj);
});



// Mutatie soorten

	db.gaHeer.update({_id : doc._id}, {$set : {Nummer : new String(doc.Nummer)}})

	db.gaHeer.update({_id : doc._id}, {$set : {ClockInTime : new Date(doc.ClockInTime)}})

	// https://stackoverflow.com/questions/4973095/mongodb-how-to-change-the-type-of-a-field
	doc.Nummer = "" + doc.Nummer;  // change to string
	doc.Nummer = new NumberInt(doc.Nummer);  // change to integer
	doc.Nummer = parseFloat(doc.Nummer);  // change to float
	db.db-name.save(doc);




// HISTORIE
// datatype van int naar string bijwerken, daar waar 'Nummer' bestaat
db.Gebieden.find({Nummer: {$exists: true}, Nummer: { $not: { $type: "string" }}}).forEach(function(doc){
   db.Gebieden.update({_id : doc._id}, {$set : {Nummer : ""+doc.Nummer}})
})
