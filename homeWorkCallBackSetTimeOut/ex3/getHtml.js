import { CreateHtml } from "./createHtml.js";
export class GetHtml {
   newTagType;
   newTagAttribute;
   newTagAttributeContent;
   newTagTextContent;
   constructor() {
      this.newTagType = document.getElementById("tagType").value;
      this.newTagAttribute = document.getElementById("tagId").value;
      this.newTagAttributeContent = document.getElementById("tagName").value;
      this.newTagTextContent = document.getElementById("tagInputText").value;
   }
   start() {
      let newElementOnHtml = new CreateHtml(
         this.newTagType,
         this.newTagAttribute,
         this.newTagAttributeContent,
         this.newTagTextContent
      );
      newElementOnHtml.print();
   }
}
