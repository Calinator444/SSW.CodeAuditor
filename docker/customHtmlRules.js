const HTMLHint = require("htmlhint").default;

exports.addCustomHtmlRule = () => {
    // Custom rule to find code block with no language specifier
    HTMLHint.addRule({
        id: "Code block - missing language",
        description: "Code blocks must contain a language specifier.",
        init: function (parser, reporter) {
          var self = this;

          parser.addListener("tagstart", function (event) {
            var tagName = event.tagName.toLowerCase(),
              mapAttrs = parser.getMapAttrs(event.attrs),
              col = event.col + tagName.length + 1;
            if (tagName === "pre" || tagName === "code") {
              if (
                !("class" in mapAttrs) ||
                !mapAttrs["class"].includes("language")
              ) {
                reporter.warn(
                  "Code blocks must contain a language specifier.",
                  event.line,
                  col,
                  self,
                  event.raw
                );
              }
            }
          });
        },
      });

    // Add new custom rule below 
}