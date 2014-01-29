{
	// __render_text__.jsx  // vanessa pyne trys to figure shit out.

	function RenderAndText()
	{
		var scriptName = "render and text";
		var safeToRunScript = true;

		safeToRunScript = (app.project != null);
		if (!app.project) {
			alert ("A project must be open to use this script.", scriptName);
		}
		if (safeToRunScript) {
			// Check the render queue and make certain at least one item is queued.
			safeToRunScript = false;
			for (i = 1; i <= app.project.renderQueue.numItems; ++i) {
				if (app.project.renderQueue.item(i).status == RQItemStatus.QUEUED) {
					safeToRunScript = true;
					break;
				}
			}
			if (!safeToRunScript) {
				alert("You do not have any items set to render.", scriptName);
			}
		}

		// if (safeToRunScript) {
		// 	// Check if we are allowed to access the network.
		// 	var securitySetting = app.preferences.getPrefAsLong("Main Pref Section", "Pref_SCRIPTING_FILE_NETWORK_SECURITY");
		// 	if (securitySetting != 1) {
		// 		alert ("This script requires the scripting security preference to be set.\n" +
		// 			"Go to the \"General\" panel of your application preferences,\n" +
		// 			"and make sure that \"Allow Scripts to Write Files and Access Network\" is checked.", scriptName);
		// 		safeToRunScript = false;
		// 	}
		// }

		if (safeToRunScript) {
			// Check if we can access the network to send email.
			// Test before the render so the person doesn't go home and wait for an email...

			// Start rendering. /////////////////////////////////////////////////////////////
			var myQueue = app.project.renderQueue // Creates a shortcut for the Render Queue.
			myQueue.render();


			// // Load code from a file with handy emailing methods.
			// var twilio = new File("(support)/renderTwilioNode.js");
			// twilio.open("r");
			// eval(twilio.read());
			// twilio.close();


			// Now rendering is complete.
			// Create a string for the mail message that contains:
			// -- Start time (date);
			// -- Render time of each item in the queue;
			// -- Total render time.

			// var projectName = "Unsaved Project";
			// if (app.project.file) {
			// 	projectName = app.project.file.name;
			// }

			// // Can't have bare LF in email, Always put \r before \n or some servers will die.
			// var myMessage = "Rendering of " + projectName + " is complete.\r\n\r\n";

			}
		}
	RenderAndText();
}
