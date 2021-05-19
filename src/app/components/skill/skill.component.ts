import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})
export class SkillComponent implements OnInit {
  constructor() {}
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 100;
  dataSkill = [
    {
      name : "CSS",
      value : 60
    },
    {
      name : "HTML",
      value : 70
    },
    {
      name : "JS",
      value : 65
    },
    {
      name : "REACT",
      value : 55
    },
    {
      name : "VUE",
      value : 80
    },
    {
      name : "MONGODB",
      value : 65
    },
    {
      name : "DOCKER",
      value : 55
    },
    {
      name : "NODEJS",
      value : 55
    },
    {
      name : "LINELIFF",
      value : 65
    },
  ]

  ngOnInit(): void {}
}
