using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class E_Loop : E_Move_Select
{

    public Rigidbody2D enemy;
    public E_Shoot enemy_barrel;
    // Holds array of points to curve around
    private Vector2[] point;

    // Used for swapping points
    private Vector3 tempPoint;

    // Current index to Lerp
    int index = 0;

    // Used to detect going forward or backward
    private bool forward;

    // Used for circular motion
    float count = 0.0f;
    float speed = 50.0f;
    int currentPoint = 0;

    IEnumerator Pause()
    {
        yield return new WaitForSeconds(1);


        //Enables shooting
        enemy_barrel.enabled = true;
        enabled = true;
    }

    // Use this for initialization
    void Awake()
    {


        // Temporarly disables movement
        enabled = false;



        enemy = this.GetComponent<Rigidbody2D>();
        enemy_barrel = this.GetComponentInChildren<E_Shoot>();
        point = new Vector2[7];

        // Chooses which side to start on

        point[0] = new Vector2(-18, 5);
        point[1] = new Vector2(0, 5);
        point[3] = new Vector2(0, 15);
        point[5] = new Vector2(0, 5);
        point[6] = new Vector2(18, 5);

        point[2] = point[1] + (point[3] - point[1]) / 2 + Vector2.right * 10.0f; // Play with 10.0 to change the curve
        point[4] = point[3] + (point[5] - point[3]) / 2 + Vector2.left * 10.0f; // Play with 10.0 to change the curve


        // Sets initial position
        int rand = Random.Range(1, 3);
        if (rand == 1)
        {
            currentPoint = 0;
            forward = true;
            enemy.transform.position = new Vector3(point[0].x, point[0].y, 0);
        }
        else
        {
            currentPoint = 6;
            forward = false;
            enemy.transform.position = new Vector3(point[6].x, point[6].y, 0);
        }

        StartCoroutine(Pause());

    }







    // Update is called once per frame
    void Update()
    {
        float step = speed * Time.deltaTime;



        if (currentPoint == 0 || currentPoint == 5 && forward)
        {

            enemy.position = Vector2.MoveTowards(transform.position, point[currentPoint + 1], step);

            if (enemy.position == point[currentPoint + 1])
            {
                currentPoint++;
                if (currentPoint == 6)
                {
                    forward = false;
                }
            }
        }
        else if (currentPoint == 1 && !forward || currentPoint == 6 && !forward)
        {
            enemy.position = Vector2.MoveTowards(transform.position, point[currentPoint - 1], step);

            if (enemy.position == point[currentPoint - 1])
            {
                currentPoint--;
                if (currentPoint == 0)
                {
                    forward = true;
                }
            }
        }
        else
        {
            if (count < 1.0f)
            {
                // Number after count is speed of curve
                count += .5f * Time.deltaTime;
                if (forward)
                {
                    Vector3 m1 = Vector3.Lerp(point[currentPoint], point[currentPoint + 1], count);
                    Vector3 m2 = Vector3.Lerp(point[currentPoint + 1], point[currentPoint + 2], count);
                    enemy.position = Vector3.Lerp(m1, m2, count);
                }
                else
                {
                    Vector3 m1 = Vector3.Lerp(point[currentPoint], point[currentPoint - 1], count);
                    Vector3 m2 = Vector3.Lerp(point[currentPoint - 1], point[currentPoint - 2], count);
                    enemy.position = Vector3.Lerp(m1, m2, count);
                }
            }
            else
            {
                count = 0.0f;
                if (currentPoint < 5 && forward)
                {
                    currentPoint += 2;
                }
                if (currentPoint > 1 && !forward)
                {
                    currentPoint -= 2;
                }
            }
        }





    }
}
