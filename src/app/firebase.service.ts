import {AngularFireDatabase} from 'angularfire2/database';
import {Injectable} from '@angular/core';

@Injectable()
export class FirebaseService {

  constructor(public afd: AngularFireDatabase) {
  }
  ////////////////// Get Data //////////////
  getCertificates() {
    return this.afd.list('/certifications');
  }

  getExperience() {
    return this.afd.list('/experience');
  }

  getNavigation() {
    return this.afd.list('/mainNavigation');
  }

  getPersonalInformation() {
    return this.afd.list('/personalInformation');
  }

  getPortfolio() {
    return this.afd.list('/portfolio');
  }

  getRecommendations() {
    return this.afd.list('/recommendations');
  }

  getSkillsSet() {
    return this.afd.list('/skillsSet');
  }

  ////////////////// Delete Data //////////////
  removeCertificates(id) {
    return this.afd.list('/certifications').remove(id);
  }

  removeExperience(id) {
    return this.afd.list('/experience').remove(id);
  }

  removeNavigation(id) {
    return this.afd.list('/mainNavigation').remove(id);
  }

  removePersonalInformation(id) {
    return this.afd.list('/personalInformation').remove(id);
  }

  removePortfolio(id) {
    return this.afd.list('/portfolio').remove(id);
  }

  removeRecommendations(id) {
    return this.afd.list('/recommendations').remove(id);
  }

  removeSkillsSet(id) {
    return this.afd.list('/skillsSet').remove(id);
  }

  ////////////////// Add Data //////////////
  addCertificates(data) {
    return this.afd.list('/certifications' + data).push(data);
  }

  addExperience(data) {
    return this.afd.list('/experience' + data).push(data);
  }

  addNavigation(data) {
    return this.afd.list('/mainNavigation' + data).push(data);
  }

  addPersonalInformation(data) {
    return this.afd.list('/personalInformation' + data).push(data);
  }

  addPortfolio(data) {
    return this.afd.list('/portfolio' + data).push(data);
  }

  addRecommendations(data) {
    return this.afd.list('/recommendations' + data).push(data);
  }

  addSkillsSet(data) {
    return this.afd.list('/skillsSet' + data).push(data);
  }

}
