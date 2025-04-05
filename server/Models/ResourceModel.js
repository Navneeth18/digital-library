const mongoose = require('mongoose');
const resourceSchema = new mongoose.Schema(
    {
      title: { type: String, required: true },
      abstract: { type: String },
      content: { type: String },
      keywords: [{ type: String }],
      dateCreated: { type: Date, default: Date.now },
      dateModified: { type: Date, default: Date.now },
      authorName: { type: String },
      category: {
        type: String,
        enum: [
          'Computer Science',
          'Environmental Science',
          'Physics',
          'Economics',
          'Healthcare',
          'Biology',
          'Mathematics',
          'Engineering'
        ]
      },
      resourceType: {
        type: String,
        enum: [
          'Research Paper',
          'Book',
          'Textbook',
          'Thesis',
          'Conference Paper'
        ]
      },
      publisher: {
        type: String,
        enum: [
          'IEEE',
          'Springer',
          'Elsevier',
          'Nature',
          'Science',
          'ACM',
          'Wiley',
          'MIT Press'
        ]
      },
      isActive: { 
        type: Boolean,
        default: true 
      },
      access: {
        type: String,
        enum: ['Student', 'Faculty', 'Public'],
        default: 'Public'
      }
    },
    { timestamps: true } // ✅ Correct way to add timestamps
  );
  
module.exports = mongoose.model('Resource', resourceSchema);