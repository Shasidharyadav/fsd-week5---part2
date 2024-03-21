const mongoose = require('mongoose');

const coCurricularActivitySchema = new mongoose.Schema({
  student_id: { type: String, required: true },
  name: { type: String, required: true },
  activity_type: { type: String, required: true },
  duration: String,
  achievements: [String],
});

const CoCurricularActivity = mongoose.model('CoCurricularActivity', coCurricularActivitySchema);

module.exports = CoCurricularActivity;
