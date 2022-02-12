const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const borrowSchema = new Schema({
    borrower: {
        memberId: String,
        name: String
    },
    book: {
        bookId: String,
        name: String,
        author: String
    },
    borrowDate: { type: Date, default: Date.now },
    dueDate: Date,
    lender: {
        staffId: String,
        name: String
    },
    receiver:{
        staffId: String,
        name: String
    },
    returnDate: Date
}, { timestamps: true });

// export Product Schema to be usable in other components
module.exports = mongoose.model("Borrow", borrowSchema);
