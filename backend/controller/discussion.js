import { Discussion } from '../models/discussionSchema.js';

export const createDiscussion = async (req, res) => {
    try {
        // Extract necessary data from the request body
        const { postContent} = req.body;
        // const uploadedBy = req.user._id;

        // Create a new discussion instance
        const newDiscussion = new Discussion({
            postContent,
            // image,
            // upvotes,
            // downvotes,
            // comments,
            // uploadedBy
        });

        // Save the discussion to the database
        const savedDiscussion = await newDiscussion.save();

        // Respond with a success message and the saved discussion
        res.status(201).json({ success: true, message: "Discussion created successfully", discussion: savedDiscussion });
    } catch (error) {
        // If an error occurs, respond with an error message
        res.status(400).json({ success: false, message: error.message });
    }
};

// Function to get all discussions
export const getAllDiscussions = async (req, res) => {
    try {
        // Fetch all discussions from the database
        const discussions = await Discussion.find();

        // Respond with the fetched discussions
        res.status(200).json({ success: true, discussions });
    } catch (error) {
        // If an error occurs, respond with an error message
        res.status(400).json({ success: false, message: error.message });
    }
};


// Function to get a discussion by its ID
export const getDiscussionById = async (req, res) => {
    try {
        // Extract the discussion ID from the request parameters
        const { id } = req.params;

        // Find the discussion by its ID in the database
        const discussion = await Discussion.findById(id);

        // Check if the discussion exists
        if (!discussion) {
            return res.status(404).json({ success: false, message: "Discussion not found" });
        }

        // Respond with the fetched discussion
        res.status(200).json({ success: true, discussion });
    } catch (error) {
        // If an error occurs, respond with an error message
        res.status(400).json({ success: false, message: error.message });
    }
};

export const deleteDiscussion = async (req, res) => {
    try {
        // Extract the discussion ID from the request parameters
        const { id } = req.params;

        // Find the discussion by its ID in the database and delete it
        const deletedDiscussion = await Discussion.findByIdAndDelete(id);

        // Check if the discussion was found and deleted
        if (!deletedDiscussion) {
            return res.status(404).json({ success: false, message: "Discussion not found" });
        }

        // Respond with a success message
        res.status(200).json({ success: true, message: "Discussion deleted successfully" });
    } catch (error) {
        // If an error occurs, respond with an error message
        res.status(400).json({ success: false, message: error.message });
    }
};

export const updateDiscussionById = async (req, res) => {
    try {
        // Extract the discussion ID from the request parameters
        const { id } = req.params;

        // Find the discussion by its ID in the database
        let discussion = await Discussion.findById(id);

        // Check if the discussion exists
        if (!discussion) {
            return res.status(404).json({ success: false, message: "Discussion not found" });
        }

        // Update the discussion with the new data from the request body
        discussion = await Discussion.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        });

        // Respond with the updated discussion
        res.status(200).json({ success: true, message: "Discussion updated successfully", discussion });
    } catch (error) {
        // If an error occurs, respond with an error message
        res.status(400).json({ success: false, message: error.message });
    }
};
