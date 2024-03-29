const {Seekers} = require('../models/schema')

const getAllSeekers = async (req,res) => {
    try {
        const seekers = await Seekers.find({})
        res.status(200).json({seekers})

    } catch (error) {
        res.status(500).json(error)
    }
}

const getSeekerFromId = async (req,res) => {
    try {
        const seeker = await Seekers.findOne({_id : req.params.id})
        if(!seeker)
        {
            return res.status(404).json({msg: `No seeker with id ${req.params.id}`})
        }
        res.status(200).json({seeker})
    } catch (error) {
        res.status(500).json(error)
    }
}

const createNewSeeker = async (req,res) => {
    try {
        const seeker = await Seekers.create(req.body)
        res.status(201).json(seeker)
    } catch (error) {
        res.status(500).json(error)
    }
}

const uploadResume = async (req,res) => {
    const seekerId = req.body.seekerId;
    try {
      const updatedJobSeeker = await Seekers.findOneAndUpdate(
        { _id: seekerId },
        { resumeUrl: req.file.location },
        { new: true}
      );
      if(!updatedJobSeeker)
      {
          return res.status(404).json({msg: `No seekers with id ${seekerId}`})
      }
      res.send('Resume URL updated successfully');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error updating resume URL');
    }
}

const getSeekerResume = async (req,res) => {
    try {
        const seeker = await Seekers.findOne({_id :  req.params.seekersId})
        if(!seeker)
        {
            return res.status(404).json({msg: `No seeker with id ${ req.params.seekersId}`})
        }
        res.status(200).json({seekerResume : seeker.resumeUrl})
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    getAllSeekers
,   getSeekerFromId
,   createNewSeeker
,   uploadResume
,   getSeekerResume
}