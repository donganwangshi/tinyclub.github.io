---
title: 更多
layout: page
tagline: 本站各类资源合集
permalink: /resources/
group: navigation
plugin: tab
categories:
  - 关于我们
tags:
  - 开源项目
  - 开放书籍
  - 泰晓沙龙
  - 幻灯片
  - 论文
  - 文章分类
description: 泰晓科技提供的各类资源，包括开源项目、开放书籍、幻灯片、论文，组织的各类沙龙活动以及所有文章分类、标签、作者等信息。
comments: false
order: 100
---

<div id="resources_content">
    
    {% for item in site.data.resources %}
        {% assign size = 0 %}
        {% if site.data[item.data] != nil %}
            {% assign articles = site.data[item.data] %}
            {% assign condition = nil %}
            {% assign value = "" %}
            {% assign size = articles.size %}
        {% else %}
            {% assign articles = site[item.src] %}
            {% assign condition = item.condition %}
            {% assign value = item.value %}
        {% endif %}
        {% for article in articles %}
            {% if condition %}
                {% if article[{{condition}}] == {{value}} %}
                    {% assign size = 1 %}
                    {% break %}
                {% endif %}
                {% if condition == 'path' and article[{{condition}}] contains {{value}} %}
                    {% assign size = 1 %}
                    {% break %}
                {% endif %}
            {% endif %}
        {% endfor %}
        {% if size != 0 %}
            <h3>{{ item.title }}</h3>
            <ul>
                {% if site.data[item.data] != nil %}
                    {% assign articles = site.data[item.data] %}
                    {% assign condition = nil %}
                    {% assign value = "" %}
                {% else %}
                    {% assign articles = site[item.src] %}
                    {% assign condition = item.condition %}
                    {% assign value = item.value %}
                {% endif %}
                {% for article in articles %}
                    {% if condition %}
                        {% if condition != 'path' %}
                            {% if article[{{condition}}] != {{value}} %}
                                {% continue %}
                            {% endif %}
                        {% else %}
                            {% unless article[{{condition}}] contains {{value}} %}
                                {% continue %}
                            {%endunless%}
                        {% endif %}
                    {% endif %}
                    <li><a ref="bookmark" href="{{ article.permalink }}">{{ article.title }}</a></li>
                {% endfor %}
            </ul>
        {% endif %}
    {% endfor %}
</div>