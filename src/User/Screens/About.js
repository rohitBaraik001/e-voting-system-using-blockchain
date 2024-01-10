import React from "react";
import { StyleRoot } from "radium";
export default function About() {
  return (
    <StyleRoot>
      <div>
        <h2 style={{ margin: 2 }}>User Manual</h2>
        <p>These are few Guidelines for user :</p>
        <p>1. Voter Registration</p>
        <ul>
          <li>
            For casting the vote user needs to first register himself.For this
            registration purpose,the user will be provided a voter registration
            form on this website.
          </li>
          <li>
            The voter can only register in the registration phase.After the
            registration phase is over the user cannot register and thus will
            not be able to vote.
          </li>
          <li>
            For registration,the user will have to enter his aadhar card number
            and the account address which the user will be using for voting
            purpose.
          </li>
          <li>
            At the first stage the user's age will be checked .if user is 18 or
            above of age then only he is eligible to vote.
          </li>
          <li>
            The second stage is OTP verification .This stage is required to
            validate the voter itself,after entering the aadhar number and
            successful age verification.
          </li>
          <li>After enterning OTP user will get successfully registered.</li>
        </ul>
        <p>2.voting process</p>
        <ul>
          <li>
            overall voting process is divided into 3 phases.All of which will be
            initialized and terminated by admin.User have to participate in the
            process according to current phase.
          </li>
        </ul>
        <ol>
          <li>
            <b>Registration Phase:</b> During this phase the registration of
            users (which are going to cast the vote) will be carried out.
          </li>
          <li>
            <b>voting Phase :</b> After initialization of voting phase from the
            admin,user can cast the vote in voting section.The casting of vote
            can be simply done by clicking on "VOTE" button,after which a
            transaction will be initiated and after confirming transaction the
            vote will get successfully casted.After voting phase gets over user
            will not be able to cast.
          </li>
          <li>
            <b>Result Phase : </b>This is the final stage of voting process
            during which the result of election will be displayed in "result
            section"
          </li>
        </ol>
      </div>
    </StyleRoot>
  );
}
