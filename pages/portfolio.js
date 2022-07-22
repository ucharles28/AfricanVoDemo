import { useState } from "react";
import SetupComplete from "../talents-onboarding/SetupComplete";
import SubmitProfile from "../talents-onboarding/SubmitProfile";
import TalentType from "../talents-onboarding/TalentType"
import TransSample from "../talents-onboarding/TransSample";
import UserBio from "../talents-onboarding/UserBio";
import UserLang from "../talents-onboarding/UserLang";
import UserProfile from "../talents-onboarding/UserProfile";
import UserSample from "../talents-onboarding/UserSample";

export default function Portfolio() {
    //state for steps
  const [step, setstep] = useState(1);
  const [talentType, setTalentType] = useState('VoiceOver');
  const [userBio, setUserBio] = useState('');
  const [languageList, setLanguageList] = useState([{ sourceLanguage: "", targetLanguage: "" }]);
  const [voiceRanges, setVoiceRanges] = useState([]);
  const [voiceOverSamples, setVoiceOverSamples] = useState([]);
  const [translationalSkills, setTranslationalSkills] = useState({});
  const [userData, setUserData] = useState({});
  const [profileImage, setProfileImage] = useState()
  const [profileImageSrc, setProfileImageSrc] = useState('https://i.ibb.co/X5LP2MZ/avatar.png')

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1); 
  };

    return ( 
        <di>
            {step === 1 && <TalentType nextStep={nextStep} setVoiceRanges={setVoiceRanges} voiceRanges={voiceRanges} languageList={languageList} setLanguageList={setLanguageList} setParentTalentType={setTalentType} />}
            {/* Translator flow*/}
            {((step === 2) && talentType === 'Translator') && <TransSample nextStep={nextStep} prevStep={prevStep} translationalSkills={translationalSkills} setTranslationalSkills={setTranslationalSkills} languageList={languageList}/>}
            {((step === 3) && talentType === 'Translator') && <UserBio talentType={talentType} nextStep={nextStep} prevStep={prevStep} userBio={userBio} setUserBio={setUserBio} />}
            {((step === 4) && talentType === 'Translator') && <UserProfile setProfileImageSrc={setProfileImageSrc} profileImageSrc={profileImageSrc} talentType={talentType} setProfileImage={setProfileImage} nextStep={nextStep} prevStep={prevStep} setUserData={setUserData} />}
            {((step === 5) && talentType === 'Translator') && <SubmitProfile nextStep={nextStep} userData={userData} prevStep={prevStep} profileImageSrc={profileImageSrc} userBio={userBio} talentType={talentType} profileImage={profileImage} translationalSkills={translationalSkills} languageList={languageList} />}
            {((step === 6) && talentType === 'Translator') && <SetupComplete prevStep={prevStep} nextStep={nextStep} />}

            {/* Voice Over flow*/}
            {((step === 2) && talentType === 'VoiceOver') && <UserBio talentType={talentType} nextStep={nextStep} prevStep={prevStep} userBio={userBio} setUserBio={setUserBio} />}
            {((step === 3) && talentType === 'VoiceOver') && <UserLang nextStep={nextStep} prevStep={prevStep} setParentLanguageList={setLanguageList} />}
            {((step === 4) && talentType === 'VoiceOver') && <UserProfile setProfileImageSrc={setProfileImageSrc} profileImageSrc={profileImageSrc} talentType={talentType} setProfileImage={setProfileImage} nextStep={nextStep} prevStep={prevStep} setUserData={setUserData} />}
            {((step === 5) && talentType === 'VoiceOver') && <UserSample nextStep={nextStep} prevStep={prevStep} setVoiceOverSamples={setVoiceOverSamples} voiceOverSamples={voiceOverSamples} userData={userData} voiceRanges={voiceRanges} />}
            {((step === 6) && talentType === 'VoiceOver') && <SubmitProfile nextStep={nextStep} userData={userData} prevStep={prevStep} profileImageSrc={profileImageSrc} userBio={userBio} talentType={talentType} profileImage={profileImage} voiceOverSamples={voiceOverSamples} languageList={languageList} />}
            {((step === 7) && talentType === 'VoiceOver') && <SetupComplete prevStep={prevStep} nextStep={nextStep} />}
            
        </di>
    );
  }