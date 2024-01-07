import { Subscription } from "../models/subscription.model";
import { User } from "../models/user.model";
import { asyncHandler } from "../utils/asyncHandler";


const subscribeChannel = asyncHandler(async (req, res) => {
    // get channel id from body
    // get subscriber (user) id from req.user
    // check if subscription already exists
    // if yes, return error
    // else create new subscription
    // return success response

    const { channelId } = req.body;
    const subscriber = req.user._id;

    const channel = await User.findById(channelId);

    if (!channel) {
        // channel not found
    }

    const existingSubscription = await Subscription.findOne({
        subscriber,
        channel,
    });

    if (existingSubscription) {
        // subscription already exists
    }

    const subscription = await Subscription.create({
        subscriber,
        channel,
    });

    

    
});