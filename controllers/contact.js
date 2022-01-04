const ContactSchema = require("../models/contact");

exports.AddContact =
  async (req, res) => {
    const { email } = req.body;
    try {
      const newContact = new ContactSchema(req.body);
      const found = await ContactSchema.findOne({ email });
      if (found) {
        return res.status(400).send("contact already exists");
      }
      await newContact.save();
      res.status(200).send({ msg: "contact added", newContact });
    } catch (error) {
      res.status(500).send("could not add contact");
    }
  };


exports.GetContacts = 
  async (req, res) => {
    try {
      const contacts = await ContactSchema.find();
      res.status(200).send({ msg: "list of contacts", contacts });
    } catch (error) {
      res.status(500).send("could not get contact");
    }
  };


exports.GetContact = 
  async (req, res) => {
    const { id } = req.params;
    try {
      const foundContact = await ContactSchema.findById(id);
      res.status(200).send({ msg: "contact found", foundContact });
    } catch (error) {
      res.status(500).send("could not get contact");
    }
  };


exports.DeleteContact = 
  async (req, res) => {
    const { id } = req.params;
    try {
      const deleted = await ContactSchema.findByIdAndDelete(id);
      res.status(200).send({ msg: "Contact deleted", deleted });
    } catch (error) {
      res.status(500).send("could not delete contact");
    }
  };


exports.UpdateContacts = 
  async (req, res) => {
    const { id } = req.params;
    try {
      const updated = await  ContactSchema.findByIdAndUpdate(id, {
        $set: { ...req.body },
      });
      res.status(200).send({ msg: "contact updated", updated });
    } catch (error) {
      res.status(500).send("could not updated contact");
    }
  };

