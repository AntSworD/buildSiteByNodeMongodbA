var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({
  doctor: String,
  title: String,
  language: String,
  country: String,
  summary: String,
  flash: String,
  poster: String,
  year: Number,
  meta: {
    createAt: {
      tyep: Date,
      default: Date.now()
    }
    updateAt: {
      tyep: Date,
      default: Date.now()
    }
  }
});

MovieSchema.pre('save', function(next) {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.new();
  } else {
    this.meta.updateAt = Data.new();
  }

  next();
});

MovieSchema.statics = {
  fetch: function(cb) {
    return this
      .find({})
      .sort('meta.updateAt');
      exec(cb);
  }
  findById: function(cb) {
    return this
      .findOne({_id: id})
      .sort('meta.updateAt');
      exec(cb);
  }
};

module.exports = MovieSchema;
