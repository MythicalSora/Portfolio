import React from "react";
import {Icon} from '@mdi/react';
import {mdiGithub} from '@mdi/js';

export default class Hero extends React.Component {
    render() {
        return (
            <section class="hero is-info is-fullheight">
            <div class="hero-head">
              <nav class="navbar">
                <div class="container">
                  <div class="navbar-brand">
                    <span class="navbar-burger" data-target="navbarMenuHeroB">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </div>
                  <div id="navbarMenuHeroB" class="navbar-menu">
                    <div class="navbar-end">
                      <a class="navbar-item">
                        Home
                      </a>
                      <a class="navbar-item">
                        Skills
                      </a>
                      <a class="navbar-item">
                        Projects
                      </a>
                      <a class="navbar-item">
                        About Me
                      </a>
                      <span class="navbar-item">
                        <a href="https://github.com/MythicalSora/Portfolio" class="button is-info is-inverted">
                          <span class="icon">
                            <Icon path={mdiGithub}/>
                          </span>
                          <span>Source</span>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          
            <div class="hero-body">
              <div class="container has-text-centered">
                <p class="title">
                  MythicalSora
                </p>
                <p class="subtitle">
                  Developer in Enschede
                </p>
              </div>
            </div>
          
            <div class="hero-foot">
              <nav class="tabs is-boxed is-fullwidth">
                <div class="container">
                  <ul>
                    <li>
                      <a href="https://github.com/MythicalSora" >GitHub</a>
                    </li>
                    <li>
                      <a href="https://mythicalsora.itch.io" >Itch.io</a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/alwin-meijboom-94908b154/" >LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://twitter.com/AlwinMeijboom">Twitter</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
        </section>
        )
    }
}